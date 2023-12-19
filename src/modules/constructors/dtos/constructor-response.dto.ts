import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { ResultsResponseDto } from '../../results/dto/results-response.dto';

export class ConstructorResponseDto {
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
  @Type(() => ResultsResponseDto)
  @ValidateNested({ each: true })
  races: ResultsResponseDto[];
}
