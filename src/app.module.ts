import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ChildModule } from './modules/childs/child.module';

@Module({
  imports: [UsersModule, ChildModule],
})
export class AppModule {}
