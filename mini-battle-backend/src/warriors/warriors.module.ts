import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WarriorsController } from './mini-warriors.controller';
import { WarriorsService } from './warriors.service';
import { WarriorSchema } from './schemas/warriors.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Warrior", schema: WarriorSchema}])
  ],
  controllers: [WarriorsController],
  providers: [WarriorsService],
})
export class WarriorsModule {}
