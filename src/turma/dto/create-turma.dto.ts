import { ApiProperty } from "@nestjs/swagger";
import { NivelEscolar } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateTurmaDto {
  @ApiProperty({ description: 'Nome da turma', type: 'string', default: 'Turma A' })
  @IsString()
  @IsNotEmpty()
  nome: string;

  @ApiProperty({ description: "Nivel escolar da turma", required: true, enum: NivelEscolar })
  @IsNotEmpty()
  @IsEnum(NivelEscolar)
  nivelEscolar: NivelEscolar;

}