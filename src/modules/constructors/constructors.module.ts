import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConstructorsService } from './constructors.service';
import { ConstructorsController } from './constructors.controller';
import { Constructors } from './model/constructors.entity';
import ConstructorsTransformer from './constructors.transformer';

@Module({
    imports: [TypeOrmModule.forFeature([Constructors])],
    providers: [ConstructorsService, ConstructorsTransformer],
    controllers: [ConstructorsController],
})
export class ConstructorsModule {}

