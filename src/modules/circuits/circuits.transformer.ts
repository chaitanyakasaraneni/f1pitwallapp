import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { CircuitResponseDto } from './dtos/circuit-response.dto';
import { Circuits } from './model/circuits.entity';

@Injectable()
export default class CircuitsTransformer {
     entityToDomain(circuit: Circuits): CircuitResponseDto {
        return plainToClass(CircuitResponseDto, {
            circuitId: circuit.circuitId,
            circuitName: circuit.circuitName,
            locationCountry: circuit.locationCountry,
            lengthKm: circuit.lengthKm,
            races: circuit.races || [],
            id: circuit.id,
        }) as CircuitResponseDto;
    }
}

