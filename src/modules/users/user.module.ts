import { Module } from '@nestjs/common';
import { UsersService } from './user.service';
import { DbModule } from '../db/db.module';

@Module({
    //TODO: Does this word without imports? (check it)
    imports: [DbModule],
    providers: [UsersService],
    exports: [UsersService],
})
export class UsersModule {}
