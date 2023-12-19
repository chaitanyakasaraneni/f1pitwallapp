import { BaseEntity } from '../../entity/base.entity';
import { Constructors } from '../../constructors/model/constructors.entity';
import { Drivers } from '../../drivers/model/drivers.entity';
import { Entity, Column, JoinColumn, ManyToOne, OneToOne, ManyToMany } from 'typeorm';
import { Races } from '../../races/model/races.entity';

@Entity('results')
export class Results extends BaseEntity {

    @ManyToMany(
        () => Drivers,
        (driver) => driver.raceResults
    )
    @JoinColumn({ name: 'drivers_short_id', referencedColumnName: 'driverId' })
    driver: Drivers;

    @OneToOne(
        () => Races
    )
    @JoinColumn({ name: 'race_short_id', referencedColumnName: 'raceId' })
    race: Races;

    @ManyToOne(
        () => Constructors,
        (team) => team.results
    )
    @JoinColumn({ name: 'constructors_short_id', referencedColumnName: 'constructorId' })
    team: Constructors;

    @Column({
        name: 'date',
        type: 'timestamptz'
    })
    date: Date;
}
