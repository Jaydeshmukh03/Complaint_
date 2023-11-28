import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

@Schema({
    timestamps: true,
  })
  export class ComplaintUser extends Document {
    @Prop()
    division: string[];
  
    @Prop()
    work: string[];
  }
  
  export const ComplaintUserSchema = SchemaFactory.createForClass(ComplaintUser);