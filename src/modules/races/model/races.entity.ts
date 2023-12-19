import { BaseEntity } from '../../entity/base.entity';
import { Circuits } from '../../circuits/model/circuits.entity';
import { Entity, Column, Index, JoinColumn, ManyToOne } from 'typeorm';

@Entity('races')
export class Races extends BaseEntity {

    @Column({
        name: 'race_short_id',
        length: 10,
        unique: true,
        type: 'varchar'
    })
    @Index('race_short_id_idx')
    raceId: string;

    @Column({
        name: 'race_name',
        length: 100,
        unique: true,
        type: 'varchar'
    })
    raceName: string;

    @Column({
        name: 'year',
        type: 'int'
    })
    @Index('year_idx')
    year: number;

    @ManyToOne(() => Circuits, (circuit) => circuit.races)
    @JoinColumn({ name: 'circuit_short_id', referencedColumnName: 'circuitId' })
    circuit: Circuits;

    @Column({
        name: 'race_number',
        type: 'int'
    })
    raceNumber: number;

    @Column({
        name: 'date',
        type: 'timestamptz'
    })
    date: Date;
}
