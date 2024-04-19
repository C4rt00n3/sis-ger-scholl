import { ApiProperty } from '@nestjs/swagger';
import { GrauInstrucao } from '@prisma/client';
import { IsOptional, IsString, IsNotEmpty, IsEmail, IsNumber, IsPositive, IsEnum, IsInt, MinLength } from 'class-validator';

export class CreateFiliacaoAlunoDto {
  @ApiProperty({ description: 'Nome da filiação do aluno', type: 'string' })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Número de celular da filiação do aluno', type: 'string', required: false })
  @IsOptional()
  @IsString()
  @MinLength(11)
  celular?: string;

  @ApiProperty({ description: 'Endereço de e-mail da filiação do aluno', type: 'string', required: false })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiProperty({ description: 'Grau de instrução da filiação do aluno', type: 'string', required: false })
  @IsOptional()
  @IsEnum(GrauInstrucao)
  grauInstrucao?: GrauInstrucao;

  @ApiProperty({description: "Telefone fixo da filiação do aluno", type: String, required: false})
  @IsOptional()
  @IsString()
  telefoneFixo?: string;

  @ApiProperty({description: "Telefone do trabalho doa filiaçã do aluno.", required: false, type: String})
  @IsOptional()
  @IsString()
  telefoneTrabalho?: string;

  @ApiProperty({description: "Trabalho da filiaçã do aluno.", required: false, type: String})
  @IsOptional()
  @IsString()
  profissao?: string;

  @ApiProperty({description: "RG da filiaçã do aluno.", required: false, type: String})
  @IsOptional()
  @IsString()
  RG?: string;

  @ApiProperty({description: "Id do aluno vinculado a filiação.", required: false, type: String})
  @IsOptional()
  @IsInt()
  alunoId: number
}
