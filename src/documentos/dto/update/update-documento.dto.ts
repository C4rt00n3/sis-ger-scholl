import { PartialType } from '@nestjs/mapped-types';
import { CreateDocumentoDto } from '../create-documento.dto';
import { CreateSusDto } from '../cerate-susDoc.dto';
import { UpdateSusDto } from './update-susDoc.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { UpdateRgDTO } from './update-rgDoc.dto';
import { CreateSituacaoMilitarDTO } from '../create.situacaoMilitar.dto';
import { UpdateSituacaoMilitarDTO } from './update-situacaoMilitar.dto';
import { CreateTituloEleitorDTO } from '../create-tituloEleitor.dto';
import { UpdateTituloEleitorDTO } from './updatetituloEleitor.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDocumentoDto  {
    @ApiProperty({ description: 'Número de registro do documento', required: false })
    @IsNumber()
    NrRegistro?: number;

    @IsString()
    @IsOptional()
    livro?: string;

    @IsString()
    @IsOptional()
    folha?: string;

    @IsOptional()
    SUS?: UpdateSusDto
    @IsOptional()
    RG?: UpdateRgDTO
    @IsOptional()
    SituacaoMilitar?: UpdateSituacaoMilitarDTO;
    @IsOptional()
    TituloEleitor?: UpdateTituloEleitorDTO;
}
