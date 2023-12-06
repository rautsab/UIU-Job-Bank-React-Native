import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import * as readline from "readline";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn('increment', {name: 'id'})
    readonly id?: number;

    @Column('varchar', {length: 255, name: 'name', nullable: false})
    readonly name: string;

    @Column('varchar', {length: 255, name: 'email', nullable: false})
    readonly email: string;

    @Column('varchar', {length: 255, name: 'password', nullable: false})
    readonly password: string;
}