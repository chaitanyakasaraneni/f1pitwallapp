import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CircuitsService } from './circuits.service';
import { CircuitsController } from './circuits.controller';
import { Circuits } from './model/circuits.entity';
import CircuitsTransformer from './circuits.transformer';

@Module({
    imports: [TypeOrmModule.forFeature([Circuits])],
    providers: [CircuitsService, CircuitsTransformer],
    controllers: [CircuitsController],
})
export class CircuitsModule {}

