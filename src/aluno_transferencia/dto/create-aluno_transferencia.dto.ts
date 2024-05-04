import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAlunoTransferenciaDto {
  @ApiProperty({ description: 'Procedência do aluno', type: String })
  @IsNotEmpty()
  @IsString()
  procedencia: string;
}
