import { PartialType } from '@nestjs/swagger';
import { CreateFiliacaoAlunoDto } from './create-filiacao-aluno.dto';

export class UpdateFiliacaoAlunoDto extends PartialType(CreateFiliacaoAlunoDto) {}
