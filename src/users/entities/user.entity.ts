import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // Esto especifica el nombre de la tabla como "users"
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userName: string;

  @Column()
  password: string;
}
