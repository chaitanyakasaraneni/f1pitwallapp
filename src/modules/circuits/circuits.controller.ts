import { Controller, Get, Post, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
} from '@nestjs/swagger';
import { CircuitsService } from './circuits.service';
import { CircuitResponseDto } from './dtos/circuit-response.dto';
import { CreateCircuitDto } from './dtos/create-circuit.dto';


@ApiTags('circuitsAPI')
@Controller('/v1/circuits')
export class CircuitsController {
    constructor(
        private readonly circuitsService: CircuitsService
    ) {}

    @Get(':circuitId')
    @ApiOperation({ summary: 'Get circuit by circuit ID' })
    @ApiResponse({ status: HttpStatus.OK, type: CircuitResponseDto, description: 'The circuit has been successfully retrieved.'})

    async getCircuitbyCircuitId(
        @Param('circuitId') circuitId: string
    ): Promise<CircuitResponseDto | null> {
        const response: CircuitResponseDto = await this.circuitsService.getCircuitByCircuitId(circuitId);
        
        return response;
    }

    @Post()
    @ApiOperation({ summary: 'Create circuit' })
    @ApiResponse({ status: HttpStatus.CREATED, type: CreateCircuitDto, description: 'The circuit has been successfully created.'})
    async createCircuit(@Body() createCircuitDto: CreateCircuitDto): Promise<CreateCircuitDto> {
        const response = await this.circuitsService.createCircuit(createCircuitDto);
        return response;
    }

    @Delete(':id')
    deleteCircuit(@Param('id') id: string) {
        return this.circuitsService.deleteCircuitById(id);
    }
}
