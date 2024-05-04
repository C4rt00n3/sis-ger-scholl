import { PartialType } from "@nestjs/mapped-types";
import { CreateSusDto } from "../cerate-susDoc.dto";

export class UpdateSusDto extends PartialType(CreateSusDto) { }