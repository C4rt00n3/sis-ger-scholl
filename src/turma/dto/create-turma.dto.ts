import { ApiProperty } from "@nestjs/swagger";
import { NivelEscolar } from "@prisma/client";
import { IsEnum, IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateTurmaDto {
  @ApiProperty({ description: 'Nome da turma', type: 'string', default: 'Turma A' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ description: "Serie da turma", required: true })
  @IsNotEmpty()
  @IsInt()
  serieId: number;
}