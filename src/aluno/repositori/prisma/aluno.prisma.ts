import { Aluno, Documento, FiliacaoAluno, Turma } from "@prisma/client";
import { CreateAlunoDto } from "src/aluno/dto/create-aluno.dto";
import { UpdateAlunoDto } from "src/aluno/dto/update-aluno.dto";
import { AlunoRepository } from "../aluno.repository";
import { PrismaService } from "src/prisma.service";
import { Injectable, NotFoundException } from "@nestjs/common";
import { EnderecoService } from "src/endereco/endereco.service";
import { DocumentosService } from "src/documentos/documentos.service";
import { ConvenioService } from "src/convenio/convenio.service";
import { AlunoTransferenciaService } from "src/aluno_transferencia/aluno_transferencia.service";
import { SerieService } from "src/serie/serie.service";
import { TurmaService } from "src/turma/turma.service";
import { FiliacaoAlunoService } from "src/filiacao-aluno/filiacao-aluno.service";
import { CreateFiliacaoAlunoDto } from "src/filiacao-aluno/dto/create-filiacao-aluno.dto";

/**
 * Implementação da interface `AlunoRepository` utilizando o Prisma como ORM.
 */
@Injectable()
export class AlunoRepositoryPrisma implements AlunoRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly enderecoService: EnderecoService,
        private readonly docService: DocumentosService,
        private readonly covService: ConvenioService,
        private readonly alTSevice: AlunoTransferenciaService,
        private readonly serieSevice: SerieService,
        private readonly turmaService: TurmaService,
        private readonly filiacaoAlunoService: FiliacaoAlunoService
    ) { }

    /**
     * Cria um novo aluno com suas relações.
     * @param createAlunoDto Os dados do aluno a ser criado.
     * @returns O aluno criado.
     */
    async create(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
        const { Documentos, Convenio, Serie, Turma, AlunoTransferencia, Endereco, filiacao, ...alunoData } = createAlunoDto;
        let data = alunoData as Aluno;
        let filiacoes: FiliacaoAluno[] = [];
        data = {...data, ...await this.createObjectsRelationsToAluno(createAlunoDto)};
        // Cria o endereço
        data.enderecoId = (await this.enderecoService.create(createAlunoDto.Endereco)).id;

        // Cria o aluno
        const aluno = await this.prisma.aluno.create({ data });

        // Cria as filiações
        filiacoes = await this.createFiliacoes(createAlunoDto.filiacao, aluno.id);

        return this.findOne(aluno.id);
    }

    /**
     * Cria novas filiações de aluno.
     * @param filiacao As filiações a serem criadas.
     * @param alunoId O ID do aluno relacionado às filiações.
     * @returns As filiações criadas.
     */
    private async createFiliacoes(filiacao: CreateFiliacaoAlunoDto[], alunoId: number): Promise<FiliacaoAluno[]> {
        return Promise.all(
            filiacao.map(async (filiacaoAluno) => {
                filiacaoAluno.alunoId = alunoId;
                return this.filiacaoAlunoService.create(filiacaoAluno);
            })
        );
    }

    /**
     * Desfaz as operações realizadas durante a criação de um aluno em caso de erro.
     * @param data Os dados do aluno que foram utilizados durante a criação.
     * @param filiacoes As filiações de aluno que foram criadas.
     */
    private async rollbackData(data: Aluno, filiacoes: FiliacaoAluno[]): Promise<void> {
        if (data.convenioId != null) { await this.covService.remove(data.convenioId); }
        if (data.serieId != null) { await this.serieSevice.remove(data.serieId); }
        if (data.documentoId) { await this.docService.remove(data.documentoId); }
        if (data.alunoTransferenciaId != null) { await this.alTSevice.remove(data.alunoTransferenciaId); }
        if (data.enderecoId != null) { await this.enderecoService.remove(data.enderecoId); }
        if (data.turmaId != null) { await this.turmaService.remove(data.turmaId); }
        if (filiacoes.length > 0) {
            await Promise.all(filiacoes.map(async (filiacao) => await this.filiacaoAlunoService.remove(filiacao.id)));
        }
    }

    /**
     * Cria objetos relacionados ao aluno (Documentos, Convenio, AlunoTransferencia, Serie, Turma) e retorna os IDs.
     * @param createAlunoDto Os dados do aluno a serem utilizados para criar os objetos relacionados.
     * @returns Um objeto contendo os IDs dos objetos relacionados ao aluno.
     */
    private async createObjectsRelationsToAluno(createAlunoDto: CreateAlunoDto): Promise<Aluno> {
        const data = {} as Aluno;
        let Documentos: Documento | null = null;
        try {
            if (createAlunoDto.Documentos) {
                Documentos = await this.docService.create(createAlunoDto.Documentos);
                data.documentoId = Documentos.id
            }

            if (createAlunoDto.Convenio) {
                const Convenio = await this.covService.create(createAlunoDto.Convenio);
                data.convenioId = Convenio.id
            }

            if (createAlunoDto.AlunoTransferencia) {
                const AlunoTransferencia = await this.alTSevice.create(createAlunoDto.AlunoTransferencia);
                data.alunoTransferenciaId = AlunoTransferencia.id
            }

            if (createAlunoDto.Serie) {
                const Serie = await this.serieSevice.create(createAlunoDto.Serie);
                data.serieId = Serie.id
            }

            if (createAlunoDto.Turma) {
                const Turma = await this.turmaService.create(createAlunoDto.Turma);
                data.turmaId = Turma.id
            }
            return data
        } catch (error) {
            // Handle error
            if(Documentos) await this.docService.rollbackData(Documentos)
            await this.rollbackData(data as Aluno, []);
            throw error;
        }
    }

    /**
     * Busca um aluno pelo ID.
     * @param id O ID do aluno a ser buscado.
     * @returns O aluno encontrado.
     * @throws NotFoundException se o aluno não for encontrado.
     */
    async findOne(id: number): Promise<Aluno> {
        return await this.prisma.aluno.findUniqueOrThrow(
            {
                where: { id },
                include: {
                    Endereco: true,
                    Convenio: true,
                    AlunoTransferencia: true,
                    Matricula: true,
                    Escola: true,
                    Turma: true,
                    Serie: true,
                    Documentos: {
                        include: {
                            SUS: true,
                            RG: true,
                            TituloEleitor: true,
                            SituacaoMilitar: true
                        }
                    },
                    filiacao: true,
                    MedicamentosAlergia: true,
                    obsNotificadasEscola: true
                }
            })
            .catch(_ => { throw new NotFoundException("Aluno não encontrado") })
    }

    /**
     * Busca vários alunos com base em um query.
     * @param query O objeto de query para a busca.
     * @returns Uma lista de alunos encontrados.
     */
    async findMany(query: {}): Promise<Aluno[]> {
        return await this.prisma.aluno.findMany({
            where: { ...query }
        })
    }

    /**
     * Atualiza um aluno existente.
     * @param id O ID do aluno a ser atualizado.
     * @param updateAlunoDto Os dados atualizados do aluno.
     * @returns O aluno atualizado.
     * @throws NotFoundException se o aluno não for encontrado.
     */
    async update(id: number, updateAlunoDto: UpdateAlunoDto): Promise<Aluno> {
        let aluno = await this.findOne(id);

        if (updateAlunoDto.Endereco) {
            await this.enderecoService.create(updateAlunoDto.Endereco);
            delete updateAlunoDto.Endereco;
        }

        if (updateAlunoDto.Documentos) {
            await this.docService.create(updateAlunoDto.Documentos);
            delete updateAlunoDto.Documentos;
        }

        if (updateAlunoDto.Convenio) {
            await this.covService.create(updateAlunoDto.Convenio);
            delete updateAlunoDto.Convenio;
        }

        if (updateAlunoDto.AlunoTransferencia) {
            await this.alTSevice.create(updateAlunoDto.AlunoTransferencia);
            delete updateAlunoDto.AlunoTransferencia;
        }

        // Mescla manualmente os dados atualizados com os dados existentes do aluno
        aluno = { ...aluno, ...updateAlunoDto };

        return await this.prisma.aluno.update({
            where: { id },
            data: { ...aluno }
        });
    }

    /**
     * Remove um aluno pelo ID.
     * @param id O ID do aluno a ser removido.
     */
    async remove(id: number): Promise<void> {
        await this.findOne(id)
        await this.prisma.aluno.delete({ where: { id } })
    }

}
