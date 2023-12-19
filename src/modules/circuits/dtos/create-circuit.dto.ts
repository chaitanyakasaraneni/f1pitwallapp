import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateCircuitDto {
  @IsNotEmpty()
  @IsString()
  circuitId: string;

  @IsNotEmpty()
  @IsString()
  circuitName: string;

  @IsNotEmpty()
  @IsString()
  locationCountry: string;

  @IsNotEmpty()
  @IsNumber()
  lengthKm: number;
}