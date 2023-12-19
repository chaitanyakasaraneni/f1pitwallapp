import { ApiProperty } from '@nestjs/swagger';

export class RacesResponseDto {
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    raceId: string;
    
    @ApiProperty()
    year: number;
    
    @ApiProperty()
    circuitId: string;
    
    @ApiProperty()
    raceNumber: number;
    
    @ApiProperty()
    date: Date;
}
