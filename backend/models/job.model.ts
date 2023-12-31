import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('jobs')
export class Jobs {
    @PrimaryGeneratedColumn('increment', {name: 'id'})
    readonly id?: number;

    @Column('varchar', {length: 255, name: 'jobTitle', nullable: false})
    readonly jobTitle: string;

    @Column('varchar', {length: 255, name: 'companyTitle', nullable: false})
    readonly companyTitle: string;

    @Column('varchar', {length: 255, name: 'location', nullable: false})
    readonly location: string;

    @Column('varchar', {length: 255, name: 'status', nullable: false})
    readonly status: string;

    @Column('varchar', {length: 255, name: 'salary', nullable: false})
    readonly salary: string;

    @Column('varchar', {length: 255, name: 'vacancy', nullable: false})
    readonly vacancy: string;

    @Column('varchar', {length: 255, name: 'experience', nullable: false})
    readonly experience: string;

    @Column('varchar', {length: 255, name: 'gender', nullable: false})
    readonly gender: string;

    @Column('varchar', {length: 255, name: 'skills', nullable: false})
    readonly skills: string;

    @Column('varchar', {length: 255, name: 'deadline', nullable: false})
    readonly deadline: string;

    @Column('text', {name: 'academic', nullable: false})
    readonly academic: string;

    @Column('text', {name: 'responsibilities', nullable: false})
    readonly responsibilities: string;

    @Column('text', {name: 'description', nullable: false})
    readonly description: string;

    @Column('date', { name: 'published_date', default: () => 'CURRENT_DATE' })
    readonly published_date: Date;

    @Column('varchar', { length: 255, name: 'author_email', nullable: false })
    readonly author_email: string;
}