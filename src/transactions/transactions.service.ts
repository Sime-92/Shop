// src/transactions/transactions.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transaction } from './entities/transaction.entity';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async create(transaction: CreateTransactionDto): Promise<Transaction> {
    return this.transactionsRepository.save(transaction);
  }

  // Aquí puedes agregar más métodos según sea necesario, como listar transacciones por usuario.
}
