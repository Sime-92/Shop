// src/cryptos/cryptos.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CryptosService } from './cryptos.service';
import { CryptosController } from './cryptos.controller';
import { Crypto } from './entities/crypto.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Crypto])],
  controllers: [CryptosController],
  providers: [CryptosService],
})
export class CryptosModule {}
