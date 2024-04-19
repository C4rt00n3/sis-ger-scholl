import { CorRaca, EstadoBrasil, Sexo } from '@prisma/client';
import { IsNotEmpty, IsDefined, IsOptional, IsInt, IsDate, IsString, IsBoolean, IsEnum, MaxLength, ValidateNested, IsNotEmptyObject, IsObject, IsEmail, MinLength, IsArray, ArrayMinSize, ArrayMaxSize } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateDocumentoDto } from 'src/documentos/dto/create-documento.dto';
import { CreateAlunoTransferenciaDto } from 'src/aluno_transferencia/dto/create-aluno_transferencia.dto';
import { CreateEnderecoDto } from 'src/endereco/dto/create-endereco.dto';
import { CreateConvenioDto } from 'src/convenio/dto/create-covenio.dto';
import { CreateSerieDto } from 'src/serie/dto/create-serie.dto';
import { CreateTurmaDto } from 'src/turma/dto/create-turma.dto';
import { CreateFiliacaoAlunoDto } from 'src/filiacao-aluno/dto/create-filiacao-aluno.dto';

export class CreateAlunoDto {
  @ApiProperty({ description: 'Nome do aluno', type: String })
  @IsNotEmpty()
  @IsString()
  nome: string;

  @ApiProperty({description: "Telefone do Aluno", type: String, required: false})
  @IsOptional()
  @MaxLength(11)
  @MinLength(11)
  @IsString()
  celularAluno?: string;

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

  @ApiProperty({ description: 'Cor/Raça do aluno', enum: CorRaca, type: String })
  @IsNotEmpty()
  @IsEnum(CorRaca)
  corRaca_Aluno: CorRaca;

  @ApiProperty({ description: 'Sexo do aluno', enum: Sexo, type: String })
  @IsNotEmpty()
  @IsEnum(Sexo)
  sexo: Sexo;

  // JSON objects to receive
  @ApiProperty({ description: 'Documentos do aluno', type: CreateDocumentoDto, required: false })
  @IsOptional()
  @ValidateNested()
  @IsDefined()
  @IsObject()
  @Type(() => CreateDocumentoDto)
  Documentos?: CreateDocumentoDto

  @ApiProperty({ description: 'Covenio do aluno', type: CreateConvenioDto, required: false })
  @IsOptional()
  @ValidateNested()
  @IsDefined()
  @IsObject()
  @Type(() => CreateConvenioDto)
  Convenio?: CreateConvenioDto

  @ApiProperty({ description: 'Transferencia do aluno', type: CreateAlunoTransferenciaDto, required: false })
  @IsOptional()
  @ValidateNested()
  @IsDefined()
  @IsObject()
  @Type(() => CreateAlunoTransferenciaDto)
  AlunoTransferencia?: CreateAlunoTransferenciaDto

  @ApiProperty({ description: 'Endereco do aluno', type: CreateEnderecoDto, required: false })
  @ValidateNested()
  @IsDefined()
  @IsObject()
  @Type(() => CreateEnderecoDto)
  Endereco: CreateEnderecoDto;

  @ApiProperty({ description: 'Serie do aluno', type: CreateSerieDto, required: true })
  @ValidateNested()
  @IsDefined()
  @IsObject()
  @Type(() => CreateSerieDto)
  Serie: CreateSerieDto;

  @ApiProperty({ description: 'Serie do aluno', type: CreateTurmaDto, required: false })
  @ValidateNested()
  @IsOptional()
  @IsObject()
  @Type(() => CreateTurmaDto)
  Turma?: CreateTurmaDto

  @ApiProperty({
    description: 'Informações sobre a filiação do aluno. Deve conter no mínimo 1 item e no máximo 2.',
    type: Array<CreateFiliacaoAlunoDto>,
  })
  
  @ValidateNested({ each: true })
  @IsArray({ message: 'A filiação deve ser um array' })
  @ArrayMinSize(1, { message: 'A filiação deve ter pelo menos 1 item' })
  @ArrayMaxSize(2, { message: 'A filiação deve ter no máximo 2 itens' })
  @Type(() => Array<CreateFiliacaoAlunoDto>)
  filiacao: Array<CreateFiliacaoAlunoDto>;
}