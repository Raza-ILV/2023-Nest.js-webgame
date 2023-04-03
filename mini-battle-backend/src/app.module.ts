import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ScheduleModule } from "@nestjs/schedule";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { WarriorsModule } from "./warriors/warriors.module";;

@Module({
  imports: [    
    ConfigModule.forRoot({envFilePath: "../.env"}),
    WarriorsModule,
    MongooseModule.forRoot(process.env.DB_URI),
    ScheduleModule.forRoot()
  ],
  controllers: [
    AppController
  ],
  providers: [AppService],
})
export class AppModule {}
