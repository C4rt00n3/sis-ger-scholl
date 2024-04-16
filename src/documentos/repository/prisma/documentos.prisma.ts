import { CreateDocumentoDto } from "src/documentos/dto/create-documento.dto";
import { UpdateDocumentoDto } from "src/documentos/dto/update/update-documento.dto";
import { DocumentosRepository } from "../documentos.repository";
import { Documento, RG, SUS, SituacaoMilitar, TituloEleitor } from "@prisma/client";
import { PrismaService } from "src/prisma.service";
import { Delete, Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class DocumentosRepositoryPrisma implements DocumentosRepository {
    constructor(private readonly prisma: PrismaService) { }

    /**
     * Cria um novo documento com base nos dados fornecidos no DTO.
     * Se os campos SUS, RG, SituacaoMilitar ou TituloEleitor no DTO não forem nulos,
     * os objetos correspondentes serão criados no banco de dados antes de criar o documento principal.
     * @param createDocumentoDto O DTO contendo os dados para criar o documento.
     * @returns O documento criado.
     */
    async create(createDocumentoDto: CreateDocumentoDto): Promise<Documento> {
        // Inicializa as variáveis dos objetos relacionados como objetos vazios
        let sus: SUS | null = null;
        let rg: RG | null = null;
        let tituloEleitor: TituloEleitor | null = null;
        let situacaoMilitar: SituacaoMilitar | null = null;
        
        // Verifica se os campos no DTO não são nulos e cria os objetos correspondentes no banco de dados
        if (createDocumentoDto.SUS !== null) {
            const obj = {} as SUS
            Object.assign(obj, createDocumentoDto.SUS)
            sus = await this.prisma.sUS.create({ data: obj });
        }
    
        if (createDocumentoDto.RG !== null) {
            const obj = {} as RG
            Object.assign(obj, createDocumentoDto.RG)
            rg = await this.prisma.rG.create({ data: obj });
        }
    
        if (createDocumentoDto.SituacaoMilitar !== null) {
            const obj = {} as SituacaoMilitar
            Object.assign(obj, createDocumentoDto.SituacaoMilitar)
            situacaoMilitar = await this.prisma.situacaoMilitar.create({ data: obj });
        }
    
        if (createDocumentoDto.TituloEleitor !== null) {
            const obj = {} as TituloEleitor
            Object.assign(obj, createDocumentoDto.TituloEleitor)
            tituloEleitor = await this.prisma.tituloEleitor.create({ data: obj});
        }
    
        // Cria o objeto documento com os dados fornecidos e os objetos relacionados criados anteriormente
        const documento = await this.prisma.documento.create({
            data: {
                ...createDocumentoDto,
                SUS: sus ? { connect: { id: sus.id } } : undefined,
                RG: rg ? { connect: { id: rg.id } } : undefined,
                SituacaoMilitar: situacaoMilitar ? { connect: { id: situacaoMilitar.id } } : undefined,
                TituloEleitor: tituloEleitor ? { connect: { id: tituloEleitor.id } } : undefined
            },
            include:{
                TituloEleitor: true,
                SituacaoMilitar: true,
                RG: true,
                SUS: true
            }
        });
    
        return documento;
    }

    async findMany(query: {}): Promise<Documento[]> {
        return await this.prisma.documento.findMany({
            where: query,
        })
    }

    async findOne(id: number): Promise<Documento> {
        return await this.prisma.documento.findUniqueOrThrow({
            where: {id}
        }).catch(_ => {throw new NotFoundException('Documento não encontrado')})
    }

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
    
    removeUndefinedKeys(obj: any): any {
        const newObj: any = {};
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] !== undefined) {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    }
    
    async remove(id: number): Promise<void> {
        await this.prisma.documento.delete({where: {id}})
    }
}