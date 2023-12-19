import { ApiProperty } from '@nestjs/swagger';

export class CircuitResponseDto {
  @ApiProperty()
  circuitId: string;

  @ApiProperty()
  circuitName: string;

  @ApiProperty()
  locationCountry: string;

  @ApiProperty()
  lengthKm: number;
}
