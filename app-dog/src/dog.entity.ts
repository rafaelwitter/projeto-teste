import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dog {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    age: number;

    @Column()
    race: string;

    @Column()
    color: string;
}