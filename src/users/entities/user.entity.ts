import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Transaction } from '../../transactions/entities/transaction.entity'; // Asegúrate de que la ruta sea correcta

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;

  // Define la relación de uno a muchos con Transaction
  @OneToMany(() => Transaction, transaction => transaction.user)
  transactions: Transaction[];
}
