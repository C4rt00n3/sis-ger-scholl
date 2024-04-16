import { CorRaca, EstadoBrasil, Sexo } from '@prisma/client';
import { IsNotEmpty, IsDefined, IsOptional, IsInt, IsDate, IsString, IsBoolean, IsEnum, MaxLength, ValidateNested, IsNotEmptyObject, IsObject, IsEmail } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateDocumentoDto } from './create-document.dto';

export class CreateAlunoDto {
  @ApiProperty({ description: 'Nome do aluno', type: String })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({ description: 'Data de nascimento do aluno', type: Date })
  @IsNotEmpty()
  @IsDate()
  dtNasc_Aluno: Date;

  @ApiProperty({ description: 'Local de nascimento do aluno', type: String })
  @IsNotEmpty()
  @IsString()
  localNascAluno: string;

  @ApiProperty({ description: 'Cidade do aluno', type: String, required: false })
  @IsOptional()
  @IsString()
  cidade_Aluno?: string;

  @ApiProperty({ description: 'UF do aluno', enum: EstadoBrasil, type: String })
  @IsEnum(EstadoBrasil)
  @IsString()
  UF_Aluno: EstadoBrasil;

  @ApiProperty({ description: 'Email do aluno', type: String, required: false })
  @IsOptional()
  @IsString()
  @IsEmail()
  @MaxLength(220)
  email?: string;

  @ApiProperty({ description: 'Mudança de nome do aluno', type: String, required: false })
  @IsOptional()
  @IsString()
  mudancaNome?: string;

  @ApiProperty({ description: 'Procedência do aluno', type: String, required: false })
  @IsOptional()
  @IsString()
  procedAluno?: string;

  @ApiProperty({ description: 'Documentos pendentes do aluno', type: Boolean, required: false, default: false })
  @IsOptional()
  @IsBoolean() 
  docPendentesSimNao?: boolean = false;

  @ApiProperty({ description: 'Ficheiro do aluno', type: String, required: false })
  @IsOptional()
  @IsString()
  ficheiro?: string;

  @ApiProperty({ description: 'Alimentos do aluno', type: String, required: false })
  @IsOptional()
  @IsString()
  alimentos?: string;

  @ApiProperty({ description: 'Local da foto do aluno', type: String, required: false })
  @IsOptional()
  @IsString()
  localFotoAluno?: string;

  @ApiProperty({ description: 'Área de proteção governamental do aluno', type: String, required: false })
  @IsOptional()
  @IsString()
  areaProtecaoGov?: string;

  @ApiProperty({ description: 'Data de registro do aluno', type: Date })
  @IsNotEmpty()
  @IsDate()
  data_Registro: Date;

  @ApiProperty({ description: 'Timestamp SSMA do aluno', type: Date })
  @IsNotEmpty()
  @IsDate()
  ssma_TimeStamp: Date;

  @ApiProperty({ description: 'Cor/Raça do aluno', enum: CorRaca, type: String })
  @IsNotEmpty()
  @IsEnum(CorRaca)
  corRaca_Aluno: CorRaca;

  @ApiProperty({ description: 'Sexo do aluno', enum: Sexo, type: String })
  @IsNotEmpty()
  @IsEnum(Sexo)
  sexo: Sexo;

  @ApiProperty({ description: 'ID do convênio do aluno', type: Number, required: false })
  @IsOptional()
  @IsInt()
  convenioId?: number;

  @ApiProperty({ description: 'ID do documento do aluno', type: Number, required: false })
  @IsOptional()
  @IsInt()
  documentoId?: number;

  @ApiProperty({ description: 'ID do aluno para transferência', type: Number, required: false })
  @IsOptional()
  @IsInt()
  alunoTransferenciaId?: number;

  @ApiProperty({ description: 'ID do endereço do aluno', type: Number, required: false })
  @IsOptional()
  @IsInt()
  enderecoId?: number;
  
  @ApiProperty({ description: 'Documentos do aluno', type: CreateDocumentoDto, required: false })
  @IsOptional()
  @ValidateNested()
  @IsDefined()
  @IsObject()
  @Type(() => CreateDocumentoDto)
  Documents: CreateDocumentoDto
}
