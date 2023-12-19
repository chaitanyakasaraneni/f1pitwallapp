import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Circuits } from './model/circuits.entity';
import { CircuitResponseDto } from './dtos/circuit-response.dto';
import CircuitsTransformer from './circuits.transformer';

@Injectable()
export class CircuitsService {
    constructor(
        @InjectRepository(Circuits)
        private readonly circuitsRepository: Repository<Circuits>,
        private readonly CircuitsTransformer: CircuitsTransformer,
    ) {}

    async createCircuit(circuitData: Partial<Circuits>): Promise<Circuits> {
        const circuit = this.circuitsRepository.create(circuitData);
        Logger.log(`Adding circuit to DB: ${circuit}`);
        return this.circuitsRepository.save(circuit);
    }

    async _getEntityByCircuitId(circuitId: string): Promise<Circuits | null> {
        if (!circuitId) {
            const message = 'Circuit ID not provided';
            throw new BadRequestException(message);
        }
        Logger.log(`Searching for Circuit using: ${circuitId}`);
        const circuit: Circuits | null = await this.circuitsRepository.findOne({where: { circuitId }});
        Logger.log(`Circuit found: ${circuit?.circuitId}`);
        return circuit;
    }

    async getCircuitByCircuitId(circuitId: string): Promise<CircuitResponseDto> {
        const circuit: Circuits | null = await this._getEntityByCircuitId(circuitId);
        if (!circuit) {
            const message = 'Circuit not found';
            throw new NotFoundException(message);
        }
        const circuitResponse: CircuitResponseDto = this.CircuitsTransformer.entityToDomain(circuit);
        return circuitResponse;
    }

    async deleteCircuitById(circuitId: string): Promise<void> {
        await this.circuitsRepository.delete(circuitId);
    }
}
