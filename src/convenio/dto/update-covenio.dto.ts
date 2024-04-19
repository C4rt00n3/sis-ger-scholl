import { PartialType } from '@nestjs/swagger';
import { CreateConvenioDto } from './create-covenio.dto';

export class UpdateConvenioDto extends PartialType(CreateConvenioDto) {}
