// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db', // Nombre del servicio en docker-compose.yml
      port: 5432,
      username: 'postgres', // Ajusta estos valores según tu configuración
      password: 'postgres',
      database: 'crypto_exchange',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Utiliza con precaución en producción
    }),
    UsersModule,
    AuthModule,
    // Otros módulos...
  ],
})
export class AppModule {}
