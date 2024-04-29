import { Injectable } from '@nestjs/common';
import { postmanBody } from './utils';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) { }

  /**
   * Calcula estatísticas relacionadas aos alunos, como total de alunos com documentos específicos preenchidos,
   * total de alunos, total de turmas e total de filiações de alunos.
   * @returns Um objeto contendo as estatísticas calculadas.
   */
  async analytics() {
    // Conta o total de alunos que têm o RG, SUS, Título de Eleitor ou situação militar pendente
    let doc = await this.prisma.documento.count({
      where: {
        OR: [
          { rGId: null },
          { sUSId: null },
          { tituloEleitorId: null },
          { situacaoMilitarId: null }
        ]
      }
    });

    doc += await this.prisma.aluno.count({where: {documentoId: null}})

    // Conta o total de alunos
    const alunosTotal = await this.prisma.aluno.count();

    // Conta o total de turmas
    const turmasTotal = await this.prisma.turma.count();

    // Conta o total de filiações de alunos
    const filiacoesTotal = await this.prisma.filiacaoAluno.count();

    const totalTransportes = await this.prisma.tituloEleitor.count()

    // Retorna um objeto com as estatísticas calculadas
    return {
      documentos: {
        total: doc,
        title: "Alunos com documentos pendentes",
      },
      alunos: {
        total: alunosTotal,
        title: "Numero de alunos cadastrados"
      },
      turmas: {
        total: turmasTotal,
        title: "Numero de turmas cadastradas"
      },
      filiacoesTotal: {total: filiacoesTotal, title: "Numero de pais cadastrados"},
      transporte: {total: totalTransportes, title: "Numero de transportes cadastrados"}
    };
  }

  test() {
    return postmanBody()
  }
}
