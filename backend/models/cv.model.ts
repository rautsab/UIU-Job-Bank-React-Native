import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cv')
export class CV {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    firstname: string;

    @Column({ type: 'varchar', length: 255 })
    lastname: string;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @Column({ type: 'varchar', length: 255 })
    phone: string;

    @Column({ type: 'varchar', length: 255 })
    address: string;

    @Column({ type: 'text', nullable: true })
    summary: string;

    @Column({ type: 'text', array: true, nullable: true })
    education: string[];

    @Column({ type: 'text', array: true, nullable: true })
    experience: string[];

    @Column({ type: 'text', array: true, nullable: true })
    skills: string[];

    @Column({ type: 'text', array: true, nullable: true })
    languages: string[];
}
