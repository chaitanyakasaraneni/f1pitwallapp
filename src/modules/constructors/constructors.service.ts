import { BadRequestException, Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Constructors } from './model/constructors.entity';
import { ConstructorResponseDto } from './dtos/constructor-response.dto';
import ConstructorsTransformer from './constructors.transformer';

@Injectable()
export class ConstructorsService {
    constructor(
        @InjectRepository(Constructors)
        private readonly constructorsRepository: Repository<Constructors>,
        private readonly ConstructorsTransformer: ConstructorsTransformer,
    ) {}

    async createConstructor(constructorData: Partial<Constructors>): Promise<Constructors> {
        const constructor = this.constructorsRepository.create(constructorData);
        Logger.log(`Adding constructor to DB: ${constructor}`);
        return this.constructorsRepository.save(constructor);
    }

    async _getEntityByConstructorId(constructorId: string): Promise<Constructors | null> {
        if (!constructorId) {
            const message = 'Constructor ID not provided';
            throw new BadRequestException(message);
        }
        Logger.log(`Searching for Constructor using: ${constructorId}`);
        const constructor: Constructors | null = await this.constructorsRepository.findOne({where: { constructorId }});
        Logger.log(`Constructor found: ${constructor?.constructorId}`);
        return constructor;
    }

    async getConstructorByConstructorId(constructorId: string): Promise<ConstructorResponseDto> {
        const constructor: Constructors | null = await this._getEntityByConstructorId(constructorId);
        if (!constructor) {
            const message = 'Constructor not found';
            throw new NotFoundException(message);
        }
        const constructorResponse: ConstructorResponseDto = this.ConstructorsTransformer.entityToDomain(constructor);
        return constructorResponse;
    }

    async deleteConstructorById(constructorId: string): Promise<void> {
        await this.constructorsRepository.delete(constructorId);
    }
}
