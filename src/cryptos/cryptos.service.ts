// src/cryptos/cryptos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Crypto } from './entities/crypto.entity';

@Injectable()
export class CryptosService {
  constructor(
    @InjectRepository(Crypto)
    private cryptosRepository: Repository<Crypto>,
  ) {}

  async findAll(): Promise<Crypto[]> {
    return this.cryptosRepository.find();
  }
}
