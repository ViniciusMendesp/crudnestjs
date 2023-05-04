import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ModuleNameModule } from './module-name/module-name.module';
import { ServiceNameService } from './service-name/service-name.service';

@Module({
  imports: [UsersModule, ModuleNameModule],
  controllers: [],
  providers: [ServiceNameService],
})
export class AppModule {}
