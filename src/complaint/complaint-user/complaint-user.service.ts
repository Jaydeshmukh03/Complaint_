import { Injectable } from '@nestjs/common';
import { CreateComplaintUserDto } from './dto/create-complaint-user.dto';
import { UpdateComplaintUserDto } from './dto/update-complaint-user.dto';
import { ComplaintUser } from './User-schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ComplaintUserService {
  constructor(
    @InjectModel(ComplaintUser.name, 'complaint')
    private complaintUserSchema: Model<ComplaintUser>,
  ) { }

  async create(createComplaintUserDto: CreateComplaintUserDto) {
    var user = await this.complaintUserSchema.create({ _id: createComplaintUserDto.id, work: createComplaintUserDto.work, division: createComplaintUserDto.division });
    return await user.save();
  }

  findAll() {
    return this.complaintUserSchema.find({}, '_id work division');
  }

  findOne(id: string) {
    return this.complaintUserSchema.findById(id, '_id work division');
  }

  update(id: string, updateComplaintUserDto: UpdateComplaintUserDto) {
    return this.complaintUserSchema.findByIdAndUpdate(
      id,
      updateComplaintUserDto,
    );
  }

  remove(id: string) {
    return this.complaintUserSchema.findByIdAndRemove(id);
  }
}
