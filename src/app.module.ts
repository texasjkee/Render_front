import { Module } from '@nestjs/common';
import { DbModule } from './modules/db/db.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/user.module';

@Module({
    imports: [DbModule, AuthModule, UsersModule],
})
export class AppModule {}
