import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
import { AdminModule } from './admin/admin.module';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost', // Host name/address from the image
      port: 5432, // Default PostgreSQL port
      username: 'Akash', // Username from the image
      password: '4682', // Password you provided
      database: 'demo_BE', // Maintenance database from the image
      entities: [], // Add your entities here
      synchronize: true, // Set to false in production for safety
    }),
  ],
})
export class AppModule {}
