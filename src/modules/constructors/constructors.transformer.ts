import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

import { Constructors } from './model/constructors.entity';
import { ConstructorResponseDto } from './dtos/constructor-response.dto';

@Injectable()
export default class ConstructorsTransformer {
     entityToDomain(constructor: Constructors): ConstructorResponseDto {
        return plainToClass(ConstructorResponseDto, {
            constructorId: constructor.constructorId,
            constructorName: constructor.constructorName,
            originCountry: constructor.originCountry,
            results: constructor.results || [],
            id: constructor.id,
        }) as ConstructorResponseDto;
    }
}

