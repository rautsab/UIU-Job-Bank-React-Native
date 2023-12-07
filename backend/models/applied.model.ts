import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('applied')
export class Applied {
    @PrimaryGeneratedColumn('increment', {name: 'id'})
    readonly id?: number;

    @Column('int', {name: 'job_id', nullable: false})
    job_id: number;

    @Column('varchar', {length: 255, name: 'user_email', nullable: false})
    readonly user_email: string;
}