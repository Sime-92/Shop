// src/transactions/dto/create-transaction.dto.ts
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsString()
  userId: number; // Asume que estás pasando el ID del usuario como string

  @IsNotEmpty()
  @IsString()
  cryptoId: string; // ID de la criptomoneda involucrada

  @IsNotEmpty()
  @IsString()
  type: 'buy' | 'sell'; // Tipo de transacción

  @IsNotEmpty()
  @IsNumber()
  amount: number; // Cantidad de cripto a comprar/vender

  @IsNotEmpty()
  @IsNumber()
  price: number; // Precio de la cripto en el momento de la transacción
}
