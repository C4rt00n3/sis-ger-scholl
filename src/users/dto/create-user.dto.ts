import { IsDate, IsEmail, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class CreateUserDto {
  @ApiProperty({ description: 'The username of the user' })
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  usuario: string;

  @ApiProperty({ description: 'The nickname of the user (optional)' })
  @IsOptional()
  @IsString()
  alcunha?: string;

  @ApiPropertyOptional({ description: 'The sector of the user (optional)' })
  @IsOptional()
  @IsString()
  userSetor?: string;

  @ApiProperty({description: "email do usuário."})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiPropertyOptional({ description: 'The date and time of the user (optional)' })
  @IsOptional()
  @IsDate()
  @Transform(({value}) => new Date(value))
  strDataHora?: Date;

  @IsNotEmpty()
  @ApiProperty({ description: 'The ID of the school' })
  @IsInt()
  escolaId: number;

  @ApiProperty({ description: 'The password of the user' , type: String, required: true})
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  senha: string;

}
