import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CircuitsService } from './circuits.service';
import { CircuitsController } from './circuits.controller';
import { Circuits } from './model/circuits.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Circuits])],
    providers: [CircuitsService],
    controllers: [CircuitsController],
})
export class CircuitsModule {}

