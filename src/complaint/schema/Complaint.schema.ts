import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { ComplaintUser } from "../complaint-user/User-schema/user.schema";



@Schema({timestamps: true})
export class Complain extends Document {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ComplaintUser' })
    createdBy: ComplaintUser;
    
    @Prop()
    InvoiceNumber: string;

    @Prop()
    issue: string;

    @Prop()
    description: string;

    @Prop()
    status: string;

    @Prop()
    imageUrls: string[];

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Response' })
    respnses: Response[];
}

export const ComplainSchema = SchemaFactory.createForClass(Complain);