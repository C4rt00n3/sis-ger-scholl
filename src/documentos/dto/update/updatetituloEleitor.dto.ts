import { CreateTituloEleitorDTO } from '../create-tituloEleitor.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTituloEleitorDTO extends PartialType(CreateTituloEleitorDTO) {} 
