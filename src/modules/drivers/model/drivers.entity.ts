import { BaseEntity } from '../../entity/base.entity';
import { Results } from '../../results/model/results.entity';
import { Entity, Column, Index, ManyToMany } from 'typeorm';

@Entity('drivers')
export class Drivers extends BaseEntity {

    @Column({
        name: 'drivers_short_id',
        length: 10,
        unique: true,
        type: 'varchar'
    })
    @Index('driver_short_id_idx')
    driverId: string;

    @Column({
        name: 'name',
        length: 72,
        unique: true,
        type: 'varchar'
    })
    @Index('name_idx')
    driverName: string;

    @Column({
        name: 'nationality',
        length: 72,
        type: 'varchar'
    })
    nationality: string;

    @Column({
        name: 'driver_number',
        type: 'int'
    })
    driverNumber: number;

    @ManyToMany(() => Results, (raceResult) => raceResult.driver)
    raceResults: Results[];
}
