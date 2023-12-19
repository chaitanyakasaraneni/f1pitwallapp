import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateConstructorDto {
  @IsNotEmpty()
  @IsString()
  constructorId: string;

  @IsNotEmpty()
  @IsString()
  constructorName: string;

  @IsNotEmpty()
  @IsString()
  originCountry: string;
}
