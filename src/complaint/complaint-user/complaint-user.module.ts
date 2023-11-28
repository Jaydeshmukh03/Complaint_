import { Module } from '@nestjs/common';
import { ComplaintUserService } from './complaint-user.service';
import { ComplaintUserController } from './complaint-user.controller';
import { ComplaintUser, ComplaintUserSchema } from './User-schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports : [ MongooseModule.forFeature([{ name: ComplaintUser.name, schema: ComplaintUserSchema }],'DB_URI'),],
  controllers: [ComplaintUserController],
  providers: [ComplaintUserService],
})
export class ComplaintUserModule {}
