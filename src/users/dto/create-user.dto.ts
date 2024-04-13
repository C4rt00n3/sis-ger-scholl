import { IsOptional, IsString, IsBoolean, IsDate } from 'class-validator';

export class CreateUserDto {
    @IsOptional()
  idUsuario?: number;

  @IsOptional()
  ID_Usuario?: number;

  @IsString()
  usuario: string;

  @IsOptional()
  @IsString()
  alcunha?: string;

  @IsString()
  senha: string;

  @IsOptional()
  @IsBoolean()
  bloqueado?: boolean;

  @IsOptional()
  @IsString()
  userSetor?: string;

  @IsOptional()
  @IsDate()
  strDataHora?: Date;

  @IsDate()
  SSMA_TimeStamp: Date;
}
