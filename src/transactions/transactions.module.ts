// src/transactions/transactions.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Transaction } from './entities/transaction.entity'; // Asegúrate de que la ruta a tu entidad sea correcta

@Module({
  imports: [TypeOrmModule.forFeature([Transaction])], // Registra la entidad Transaction con TypeORM
  controllers: [TransactionsController], // Registra el TransactionsController
  providers: [TransactionsService], // Registra el TransactionsService
})
export class TransactionsModule {}
