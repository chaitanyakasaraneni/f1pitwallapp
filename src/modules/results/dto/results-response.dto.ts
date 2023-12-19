import { ApiProperty } from '@nestjs/swagger';

export class ResultsResponseDto {
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    driverId: string;
    
    @ApiProperty()
    circuitId: string;
    
    @ApiProperty()
    team: string;
    
    @ApiProperty()
    date: Date;
}
