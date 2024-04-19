import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTurmaDto {
    @ApiProperty({ description: 'Nome da turma', type: 'string', default: 'Turma A' })
    @IsString()
    @IsNotEmpty()
    nomeTurma: string;
  
    @ApiProperty({ description: 'ID da escola', type: 'number' })
    escolaId: number;
  }