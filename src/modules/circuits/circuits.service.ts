import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Circuits } from './model/circuits.entity';

@Injectable()
export class CircuitsService {
    constructor(
        @InjectRepository(Circuits)
        private readonly circuitsRepository: Repository<Circuits>,
    ) {}

    async createCircuit(circuitData: Partial<Circuits>): Promise<Circuits> {
        const circuit = this.circuitsRepository.create(circuitData);
        return this.circuitsRepository.save(circuit);
    }

    async getCircuitById(circuitId: string): Promise<Circuits | null> {
        if (!circuitId) {
            const message = 'Circuit ID not provided';
            throw new BadRequestException(message);
        }
        const circuit: Circuits | null = await this.circuitsRepository.findOne({ where: { circuitId } });
        return circuit;
    }

    async deleteCircuitById(circuitId: string): Promise<void> {
        await this.circuitsRepository.delete(circuitId);
    }
}
