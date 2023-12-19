import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { RacesResponseDto } from '../../races/dto/races-response.dto';
import { ResultsResponseDto } from '../../results/dto/results-response.dto';

export class CircuitResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  circuitId: string;

  @ApiProperty()
  circuitName: string;

  @ApiProperty()
  locationCountry: string;

  @ApiProperty()
  lengthKm: number;

  @ApiProperty()
  @IsArray()
  @Type(() => RacesResponseDto)
  @ValidateNested({ each: true })
  races: RacesResponseDto[];

  @ApiProperty()
  @IsArray()
  @Type(() => ResultsResponseDto)
  @ValidateNested({ each: true })
  raceResults: ResultsResponseDto[];
}
