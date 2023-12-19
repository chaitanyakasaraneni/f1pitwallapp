import {
    CreateDateColumn,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp with time zone',
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP',
    })
    createdAt?: Date;
}

export class MutableBaseEntity extends BaseEntity {
    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP',
        nullable: false,
    })
    updatedAt?: Date;
}
