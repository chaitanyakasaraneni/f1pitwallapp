import { Controller, Get, Post, Delete, Body, Param, HttpStatus } from '@nestjs/common';
import {
    ApiTags,
    ApiOperation,
    ApiResponse,
} from '@nestjs/swagger';
import { ConstructorsService } from './constructors.service';
import { CreateConstructorDto } from './dtos/create-constructor.dto';
import { ConstructorResponseDto } from './dtos/constructor-response.dto';



@ApiTags('constructorsAPI')
@Controller('/v1/constructors')
export class ConstructorsController {
    constructor(
        private readonly constructorsService: ConstructorsService
    ) {}

    @Get(':circuitId')
    @ApiOperation({ summary: 'Get circuit by circuit ID' })
    @ApiResponse({ status: HttpStatus.OK, type: ConstructorResponseDto, description: 'The circuit has been successfully retrieved.'})

    async getCircuitbyCircuitId(
        @Param('circuitId') circuitId: string
    ): Promise<ConstructorResponseDto | null> {
        const response: ConstructorResponseDto = await this.constructorsService.getConstructorByConstructorId(circuitId);
        
        return response;
    }

    @Post()
    @ApiOperation({ summary: 'Create circuit' })
    @ApiResponse({ status: HttpStatus.CREATED, type: CreateConstructorDto, description: 'The circuit has been successfully created.'})
    async createCircuit(@Body() createCircuitDto: CreateConstructorDto): Promise<CreateConstructorDto> {
        const response = await this.constructorsService.createConstructor(createCircuitDto);
        return response;
    }

    @Delete(':id')
    deleteCircuit(@Param('id') id: string) {
        return this.constructorsService.deleteConstructorById(id);
    }
}
