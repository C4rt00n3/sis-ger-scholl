import { ApiProperty } from "@nestjs/swagger";
import { NivelEscolar } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export class CreateSerieDto {
    @ApiProperty({ description: 'Nome da série', type: 'string', default: '1ª Série' })
    @IsString()
    @IsNotEmpty()
    nomeSerie: string;

    @ApiProperty({ description: 'Nível escolar', type: 'string', default: 'Ensino Fundamental' })
    @IsEnum(NivelEscolar)
    @IsNotEmpty()
    nivelEscolar: NivelEscolar;
}