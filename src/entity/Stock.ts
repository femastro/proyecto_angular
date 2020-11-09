import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Stock {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    codArticulo: string;

    @Column()
    stock: number;

}