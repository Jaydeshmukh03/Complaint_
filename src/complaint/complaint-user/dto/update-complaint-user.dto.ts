import { PartialType } from '@nestjs/mapped-types';
import { CreateComplaintUserDto } from './create-complaint-user.dto';

export class UpdateComplaintUserDto extends PartialType(CreateComplaintUserDto) {
    division: [];
    work: [];
}