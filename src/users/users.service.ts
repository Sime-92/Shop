// src/users/users.service.ts

import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const newUser = this.usersRepository.create({
      ...createUserDto,
      password: hashedPassword, // Asegúrate de estar asignando el hashedPassword aquí
    });

    await this.usersRepository.save(newUser);
    return newUser;
  }

  //Method for find user
  async findOne(userName: string): Promise<User | undefined> {
    return this.usersRepository.findOne({ where: { userName } });
  }
  
}
