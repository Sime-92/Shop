// src/cryptos/entities/crypto.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Crypto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  symbol: string;

  @Column('decimal', { precision: 10, scale: 2 })
  currentPrice: number;
}
