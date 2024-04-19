import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { UpdateEnderecoDto } from 'src/endereco/dto/update-endereco.dto';

export class UpdateEscolaDto {
    @ApiProperty({ description: 'Nome completo da escola', type: 'string' })
    @IsString()
    @IsOptional()
    nome: string;
  
    @ApiProperty({ description: 'Nome fantasia da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    nomeFantasia?: string;
  
    @ApiProperty({ description: 'Entidade mantenedora da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    entidadeMantenedora?: string;
  
    @ApiProperty({ description: 'Secretaria da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    secretaria?: string;
  
    @ApiProperty({ description: 'CNPJ da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    cnpj?: string;
  
    @ApiProperty({ description: 'Cadastro do MEC da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    cadastroMEC?: string;
  
    @ApiProperty({ description: 'URL da foto da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    fotoEscola?: string;
  
    @ApiProperty({ description: 'Nome da foto da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    nomeFotoEscola?: string;
  
    @ApiProperty({ description: 'Nome do diretor da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    diretor?: string;
  
    @ApiProperty({ description: 'Nome do secretário da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    secretario?: string;
  
    @ApiProperty({ description: 'Nome do coordenador pedagógico da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    coordPedagogico?: string;
  
    @ApiProperty({ description: 'URL da foto do aluno (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    fotoAluno?: string;
  
    @ApiProperty({ description: 'Configurações do servidor (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    configServidor?: string;
  
    @ApiProperty({ description: 'Email da escola (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    email?: string;
  
    @ApiProperty({ description: 'Página da escola em rede social (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    paginaRedeSocial?: string;
  
    @ApiProperty({ description: 'Documento de autorização do diretor (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
    docAutorizacaoDiretor?: string;
  
    @ApiProperty({ description: 'Documento de autorização do secretário (opcional)', type: 'string', required: false })
    @IsOptional()
    @IsString()
     docAutorizacaoSecretario?: string;
  
    @ApiProperty({ description: 'Tipo de escola', type: 'string' })
    @IsString()
    @IsOptional()
    tipo: string;
  
    @ApiProperty({ description: 'Nível escolar', type: 'string' })
    @IsString()
    @IsOptional()
    nivel: string;
  
    @ApiProperty({ description: 'Endereco do aluno', type: UpdateEnderecoDto, required: false })
    @IsOptional()
    @ValidateNested()
    @IsDefined()
    @IsObject()
    @Type(() => UpdateEnderecoDto)
    Endereco: UpdateEnderecoDto
}
 