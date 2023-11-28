import { IsNotEmpty, IsString } from "class-validator";

export class CreateComplaintUserDto {

    @IsNotEmpty()
    @IsString()
    id: string;
    division: [];
    work: String[];
}
