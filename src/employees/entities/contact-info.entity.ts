import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ContactInfo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    phone?: string;

    @Column({ nullable: true })
    email?: string;
}