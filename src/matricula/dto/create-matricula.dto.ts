import { Resultado } from "@prisma/client";
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, isEnum } from "class-validator";

export class CreateMatriculaDto {
    @IsNotEmpty()
    @IsInt()
    AnoLetivo: number;
  
    @IsOptional()
    @IsString()
    Nivel?: string;
  
    @IsOptional()
    @IsString()
    horarioAulaID?: string;
  
    @IsOptional()
    @IsString()
    HorasAnual?: string;
  
    @IsOptional()
    @IsNumber()
    Frequencia?: number;
  
    @IsOptional()
    @IsDate()
    dataSaida?: Date;
  
    @IsOptional()
    @IsString()
    Resultado_Final?: string;
  
    @IsOptional()
    @IsString()
    LocalFotoAluno?: string;
  
    @IsOptional()
    @IsString()
    Dt_Alteracao?: string;
  
    @IsNotEmpty()
    @IsDate()
    SSMA_TimeStamp: Date;
  
    @IsNotEmpty()
    @IsInt()
    serieId: number;
  
    @IsOptional()
    @IsInt()
    turmaId?: number;
    
    @IsNotEmpty()
    @IsInt()
    escolaId: number;
  
    @IsNotEmpty()
    @IsInt()
    turnosId: number;
  
    @IsNotEmpty()
    @IsInt()
    alunoId: number;
  
    // @IsOptional()
    // @IsArray()
    // Materia?: Materia[];
  
    @IsEnum(Resultado)
    Resultado?: Resultado;
  }