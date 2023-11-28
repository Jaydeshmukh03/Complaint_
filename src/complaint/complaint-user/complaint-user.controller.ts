import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComplaintUserService } from './complaint-user.service';
import { CreateComplaintUserDto } from './dto/create-complaint-user.dto';
import { UpdateComplaintUserDto } from './dto/update-complaint-user.dto';

@Controller('/complaintUser')
export class ComplaintUserController {
  constructor(private readonly complaintUserService: ComplaintUserService) {}

  @Post()
  create(@Body() createComplaintUserDto: CreateComplaintUserDto) {
    return this.complaintUserService.create(createComplaintUserDto);
  }

  @Get()
  findAll() {
    return this.complaintUserService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.complaintUserService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComplaintUserDto: UpdateComplaintUserDto) {
    return this.complaintUserService.update(id, updateComplaintUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.complaintUserService.remove(id);
  }
}
