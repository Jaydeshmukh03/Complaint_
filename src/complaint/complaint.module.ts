import { Module } from '@nestjs/common';
import { ComplaintService } from './complaint.service';
import { ComplaintController } from './complaint.controller';

@Module({
  imports : [],
  controllers: [ComplaintController],
  providers: [ComplaintService],
})
export class ComplaintModule {}
