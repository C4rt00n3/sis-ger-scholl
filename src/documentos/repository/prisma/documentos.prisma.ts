import { CreateDocumentoDto } from "src/documentos/dto/create-documento.dto";
import { UpdateDocumentoDto } from "src/documentos/dto/update/update-documento.dto";
import { Documento, Prisma, RG, SUS, SituacaoMilitar, TituloEleitor } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { ConflictException, Delete, Injectable, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { DocumentosRepository } from "src/documentos/repository/documentos.repository";
import { CreateSusDto } from "src/documentos/dto/cerate-susDoc.dto";
import { CreateRgDto } from "src/documentos/dto/create-rgDoc.dto";
import { CreateSituacaoMilitarDTO } from "src/documentos/dto/create.situacaoMilitar.dto";
import { CreateTituloEleitorDTO } from "src/documentos/dto/create-tituloEleitor.dto";

/**
 * Implementação da interface `DocumentosRepository` utilizando o Prisma como ORM.
 */
@Injectable()
export class DocumentosRepositoryPrisma implements DocumentosRepository {
    constructor(
        private readonly prisma: PrismaService
    ) { }

    /**
     * Cria um novo documento com base nos dados fornecidos no DTO.
     * @param createDocumentoDto O DTO contendo os dados para criar o documento.
     * @returns O documento criado.
     */
    async create(createDocumentoDto: CreateDocumentoDto): Promise<Documento> {
        let documentoData: Documento;
        try {
            documentoData = await this.createDocumentData(createDocumentoDto);
            return await this.prisma.documento.create({
                data: {
                    ...documentoData,
                }
            })
        } catch (error) {
            if (documentoData) {
                await this.rollbackData(documentoData);
            }
            this.showErrors(error);
            throw error;
        }
    }

    /**
     * Desfaz as operações realizadas durante a criação do documento em caso de erro.
     * @param documentoData O objeto de dados do documento que foi utilizado durante a criação.
     */
    async rollbackData(documentData: Documento): Promise<void> {
        const deleteOperations = [];
        if (documentData.sUSId)
            deleteOperations.push(this.prisma.sUS.delete({ where: { id: documentData.sUSId } }));
        if (documentData.situacaoMilitarId)
            deleteOperations.push(this.prisma.situacaoMilitar.delete({ where: { id: documentData.situacaoMilitarId } }));
        if (documentData.tituloEleitorId)
            deleteOperations.push(this.prisma.tituloEleitor.delete({ where: { id: documentData.tituloEleitorId } }));
        if (documentData.rGId)
            deleteOperations.push(this.prisma.rG.delete({ where: { id: documentData.rGId } }));

        await Promise.all(deleteOperations);
    }

    /**
     * Cria o objeto de dados do documento com base nos dados fornecidos no DTO.
     * @param createDocumentoDto O DTO contendo os dados para criar o documento.
     * @returns O objeto de dados do documento.
     */
    private async createDocumentData(createDocumentDto: CreateDocumentoDto): Promise<Documento> {
        const { SituacaoMilitar, RG, SUS, TituloEleitor, ...document } = createDocumentDto;
        const documentData = document as Documento;
        try {
            if (SUS) {
                const sus = await this.createSus(SUS)
                documentData.sUSId = sus.id;
            }

            if (SituacaoMilitar) {
                const situacaoMilitar = await this.createSituacaoMilitar(SituacaoMilitar)
                documentData.situacaoMilitarId = situacaoMilitar.id;
            }

            if (TituloEleitor) {
                const tituloEleitor = await this.createTituloEleitor(TituloEleitor)
                documentData.tituloEleitorId = tituloEleitor.id;
            }

            if (RG) {
                const rg = await this.createRG({ ...RG })
                documentData.rGId = rg.id
            }

            documentData.livro = createDocumentDto.livro;
            documentData.folha = createDocumentDto.folha;

            return documentData;
        }catch(error){
            return documentData
        }
    }

    private showErrors(error: any) {
        switch (error.code) {
            case 'P2002':
                if (error.meta?.target?.includes('cpf')) {
                    throw new Error('CPF já existe');
                }
                if (error.meta?.target?.includes('rg')) {
                    throw new Error('RG já existe');
                }
                if (error.meta?.target?.includes('inscricao')) {
                    throw new Error('Inscrição do título de eleitor já existe');
                }
                if (error.meta?.target?.includes('ra')) {
                    throw new Error('RA já existe');
                }
                if (error.meta?.target?.includes('cpf')) {
                    throw new Error('CPF já existe');
                }
                if (error.meta?.target?.includes('numero')) {
                    throw new ConflictException('Número do SUS já existe');
                }
                break;
            default:
                console.error('Unexpected error:', error);
                throw new Error('Erro inesperado ao criar documento');
        }
    }

    /**
     * Cria um novo cartão SUS com base nos dados fornecidos no DTO.
     * @param CreateSusDto O DTO contendo os dados para criar o documento SUS.
     * @returns O SUS criado.
     */
    async createSus(createSusDto: CreateSusDto): Promise<SUS> {
        let data = {} as SUS;
        Object.assign(data, createSusDto);
        return await this.prisma.sUS.create({ data });
    }

    /**
     * Cria um novo registro de situação militar com base nos dados fornecidos no DTO.
     * @param CreateSituacaoMilitarDTO O DTO contendo os dados para criar o registro de situação militar.
     * @returns O registro de situação militar criado.
     */
    async createSituacaoMilitar(createSituacaoMilitarDto: CreateSituacaoMilitarDTO): Promise<SituacaoMilitar> {
        return await this.prisma.situacaoMilitar.create({ data: createSituacaoMilitarDto });
    }

    /**
     * Cria um novo registro de título de eleitor com base nos dados fornecidos no DTO.
     * @param CreateTituloEleitorDTO O DTO contendo os dados para criar o registro de título de eleitor.
     * @returns O registro de título de eleitor criado.
     */
    async createTituloEleitor(createTituloEleitor: CreateTituloEleitorDTO): Promise<TituloEleitor> {
        return await this.prisma.tituloEleitor.create({ data: createTituloEleitor });
    }

    /**
     * Cria um novo documento de identidade (RG) com base nos dados fornecidos no DTO.
     * @param createRGDto O DTO contendo os dados para criar o documento RG.
     * @returns O RG criado.
     */
    async createRG(createRGDto: CreateRgDto): Promise<RG> {
        const data = {} as RG;
        Object.assign(data, createRGDto)
        return await this.prisma.rG.create({
            data: data
        });
    }

    /**
     * Busca vários documentos com base em um query.
     * @param query O objeto de query para a busca.
     * @returns Uma lista de documentos encontrados.
     */
    async findMany(query: {}): Promise<Documento[]> {
        return await this.prisma.documento.findMany({ where: query });
    }

    /**
     * Busca um documento pelo ID.
     * @param id O ID do documento a ser buscado.
     * @returns O documento encontrado.
     * @throws NotFoundException se o documento não for encontrado.
     */
    async findOne(id: number): Promise<Documento> {
        return await this.prisma.documento
            .findUniqueOrThrow({ where: { id } })
            .catch(_ => { throw new NotFoundException('Documento não encontrado') });
    }

    /**
     * Atualiza um documento existente.
     * @param id O ID do documento a ser atualizado.
     * @param updateDocumentoDto Os dados atualizados do documento.
     * @returns O documento atualizado.
     */
    async update(id: number, updateDocumentoDto: UpdateDocumentoDto): Promise<Documento> {
        const documento = await this.findOne(id);

        const dataToUpdate = {
            ...updateDocumentoDto,
            SUS: updateDocumentoDto.SUS ? { update: updateDocumentoDto.SUS } : undefined,
            RG: updateDocumentoDto.RG ? { update: updateDocumentoDto.RG } : undefined,
            SituacaoMilitar: updateDocumentoDto.SituacaoMilitar ? { update: updateDocumentoDto.SituacaoMilitar } : undefined,
            TituloEleitor: updateDocumentoDto.TituloEleitor ? { update: updateDocumentoDto.TituloEleitor } : undefined,
        };

        return await this.prisma.documento.update({
            where: { id },
            data: this.removeUndefinedKeys(dataToUpdate),
        });
    }

    /**
     * Remove um documento pelo ID.
     * @param id O ID do documento a ser removido.
     */
    async remove(id: number): Promise<void> {
        await this.prisma.documento.delete({ where: { id } });
    }

    /**
     * Remove chaves com valor undefined de um objeto.
     * @param obj O objeto do qual remover chaves undefined.
     * @returns O objeto sem chaves undefined.
     */
    removeUndefinedKeys(obj: any): any {
        const newObj: any = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined) {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }
}
