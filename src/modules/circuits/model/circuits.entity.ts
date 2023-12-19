import { BaseEntity } from '../../entity/base.entity';
import { Races } from '../../races/model/races.entity';
import { Entity, Column, Index, OneToMany, OneToOne } from 'typeorm';

@Entity('circuits')
export class Circuits extends BaseEntity {

    @Index('circuit_short_id_idx')
    @Column({
        name: 'circuit_short_id',
        length: 36,
        unique: true,
        type: 'varchar'
    })
    circuitId: string;

    @Column({
        name: 'name',
        length: 72,
        unique: true,
        type: 'varchar'
    })
    circuitName: string;

    @Column({
        name: 'location',
        length: 72,
        type: 'varchar'
    })
    locationCountry: string;

    @Column({
        name: 'length_kms',
        type: 'float'
    })
    lengthKm: number;
    
    @OneToMany(
        () => Races,
        (race) => race.circuit,
        { eager: true }
    )
    races: Races[];
}
