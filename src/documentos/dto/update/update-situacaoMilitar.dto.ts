import { PartialType } from "@nestjs/mapped-types";
import { CreateSituacaoMilitarDTO } from "../create.situacaoMilitar.dto";

export class UpdateSituacaoMilitarDTO extends PartialType(CreateSituacaoMilitarDTO) {}
