import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class CreateRaceDto {
  @IsNotEmpty()
  @IsString()
  raceId: string;

  @IsNotEmpty()
  @IsString()
  raceName: string;

  @IsNotEmpty()
  year: number;

  @IsNotEmpty()
  raceNumber: number;

  @IsNotEmpty()
  @IsString()
  date: Date;

  @IsNotEmpty()
  @IsString()
  circuitId: string;
}
