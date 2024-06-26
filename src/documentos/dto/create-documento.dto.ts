import { IsDefined, IsNotEmpty, IsNotEmptyObject, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { CreateSusDto } from './cerate-susDoc.dto';
import { CreateSituacaoMilitarDTO } from './create.situacaoMilitar.dto';
import { CreateTituloEleitorDTO } from './create-tituloEleitor.dto';
import { CreateRgDto } from './create-rgDoc.dto';

export class CreateDocumentoDto {
    @ApiProperty({ description: 'Número do livro do documento', required: false })
    @IsString()
    @IsOptional()
    livro: string;

    @ApiProperty({ description: 'Número da folha do documento', required: false })
    @IsString()
    @IsOptional()
    folha: string;

    @ApiProperty({ description: 'Dados do SUS', type: CreateSusDto })
    @ValidateNested()
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @Type(() => CreateSusDto)
    SUS: CreateSusDto;

    @ApiProperty({ description: 'Dados do RG', type: CreateRgDto, required: false })
    @ValidateNested()
    @IsDefined()
    @IsNotEmptyObject()
    @IsObject()
    @Type(() => CreateRgDto)
    RG: CreateRgDto;

    @ApiProperty({ description: 'Dados da situação militar', type: CreateSituacaoMilitarDTO, required: false })
    @ValidateNested()
    @Type(() => CreateSituacaoMilitarDTO)
    SituacaoMilitar: CreateSituacaoMilitarDTO;

    @ApiProperty({ description: 'Dados do título eleitoral', type: CreateTituloEleitorDTO, required: false })
    @ValidateNested()
    @Type(() => CreateTituloEleitorDTO)
    TituloEleitor: CreateTituloEleitorDTO;
}
