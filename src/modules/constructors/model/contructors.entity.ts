import { BaseEntity } from '../../entity/base.entity';
import { Results } from '../../results/model/results.entity';
import { Entity, Column, Index, OneToMany } from 'typeorm';

@Entity('constructors')
export class Constructors extends BaseEntity {

    @Column({
        name: 'constructors_short_id',
        length: 36,
        unique: true,
        type: 'varchar'
    })
    @Index('constructors_short_id_idx')
    constructorId: string;

    @Column({
        name: 'name',
        length: 72,
        unique: true,
        type: 'varchar'
    })
    constructorName: string;

    @Column({
        name: 'origin_country',
        length: 72,
        type: 'varchar'
    })
    originCountry: string;

    @OneToMany(() => Results, (raceResult) => raceResult.driver)
    raceResults: Results[];
}
