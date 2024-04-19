import { PartialType } from '@nestjs/swagger';
import { CreateAlunoTransferenciaDto } from './create-aluno_transferencia.dto';

export class UpdateAlunoTransferenciaDto extends PartialType(CreateAlunoTransferenciaDto) {}
