import { PartialType } from '@nestjs/mapped-types';
import { CreateRgDto } from '../create-rgDoc.dto';

export class UpdateRgDTO extends PartialType(CreateRgDto) {}
