import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';
import { CircuitResponseDto } from '../../circuits/dtos/circuit-response.dto';

export class RaceResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  raceId: string;

  @ApiProperty()
  raceName: string;

  @ApiProperty()
  year: Number;

  @ApiProperty()
  raceNumber: number;

  @ApiProperty()
  date: Date;

  @ApiProperty()
  @IsArray()
  @Type(() => CircuitResponseDto)
  @ValidateNested({ each: true })
  circuit: CircuitResponseDto[];
}
