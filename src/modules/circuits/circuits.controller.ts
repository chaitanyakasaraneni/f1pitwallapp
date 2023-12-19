import { Controller, Get, Post, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
} from '@nestjs/swagger';
import { CircuitsService } from './circuits.service';
import { CircuitResponseDto } from './dtos/circuit-response.dto';
import { CreateCircuitDto } from './dtos/create-circuit.dto';


@ApiTags('circuits')
@Controller('/v1/circuits')
export class CircuitsController {
    constructor(private readonly circuitsService: CircuitsService) {}

    @Get(':id')
    @ApiOperation({ summary: 'Get circuit by ID' })
    @ApiResponse({ status: HttpStatus.OK, type: CreateCircuitDto, description: 'The circuit has been successfully retrieved.'})
    async getCircuitbyId(
        @Param('id') id: string
    ): Promise<CircuitResponseDto | null> {
        const respone: CircuitResponseDto | null = await this.circuitsService.getCircuitById(id);
        return respone;
    }

    @Post()
    @ApiOperation({ summary: 'Create circuit' })
    @ApiResponse({ status: HttpStatus.CREATED, type: CreateCircuitDto, description: 'The circuit has been successfully created.'})
    async createCircuit(@Body() createCircuitDto: CreateCircuitDto): Promise<CreateCircuitDto> {
        const respone = await this.circuitsService.createCircuit(createCircuitDto);
        return respone;
    }

    @Delete(':id')
    deleteCircuit(@Param('id') id: string) {
        return this.circuitsService.deleteCircuitById(id);
    }
}
