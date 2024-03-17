// src/cryptos/cryptos.controller.ts
import { Controller, Get } from '@nestjs/common';
import { CryptosService } from './cryptos.service';
import { Crypto } from './entities/crypto.entity';

@Controller('cryptos')
export class CryptosController {
  constructor(private readonly cryptosService: CryptosService) {}

  @Get()
  findAll(): Promise<Crypto[]> {
    return this.cryptosService.findAll();
  }
}
