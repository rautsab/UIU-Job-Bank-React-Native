import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import * as readline from "readline";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn('increment', {name: 'id'})
    readonly id?: number;

    @Column('varchar', {length: 255, name: 'firstname', nullable: false})
    readonly firstname: string;

    @Column('varchar', {length: 255, name: 'lastname', nullable: false})
    readonly lastname: string;

    @Column('varchar', {length: 255, name: 'email', nullable: false})
    readonly email: string;

    @Column('varchar', {length: 255, name: 'password', nullable: false})
    readonly password: string;
}