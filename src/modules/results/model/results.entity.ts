import { BaseEntity } from '../../entity/base.entity';
import { Circuits } from '../../circuits/model/circuits.entity';
import { Constructors } from '../../constructors/model/contructors.entity';
import { Drivers } from '../../drivers/model/drivers.entity';
import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';

@Entity('results')
export class Results extends BaseEntity {

    @ManyToOne(
        () => Drivers,
        (driver) => driver.raceResults
    )
    @JoinColumn({ name: 'drivers_short_id', referencedColumnName: 'driverId' })
    driver: Drivers;

    @ManyToOne(
        () => Circuits,
        (circuit) => circuit.raceResults
    )
    @JoinColumn({ name: 'circuit_short_id', referencedColumnName: 'circuitId' })
    circuit: Circuits;

    @ManyToOne(
        () => Constructors,
        (team) => team.raceResults
    )
    @JoinColumn({ name: 'constructors_short_id', referencedColumnName: 'constructorId' })
    team: Constructors;

    @Column({
        name: 'date',
        type: 'timestamptz'
    })
    date: Date;
}
