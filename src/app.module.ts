import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ComplaintModule } from './complaint/complaint.module';


@Module({
  imports: [
    ConfigModule.forRoot({isGlobal :true, envFilePath : ['.env']}),
    MongooseModule.forRootAsync({imports : [ConfigModule], useFactory :(ConfigService : ConfigService)=>({uri : ConfigService.get("DB_URI")}),

    inject :[ConfigService]}),
    ComplaintModule,
    //BookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
