import { Module } from '@nestjs/common';
import { SolarPanelsController } from './solar-panels.controller';
import { SolarPanelsService } from './solar-panels.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [SolarPanelsController],
  providers: [SolarPanelsService],
  exports: [SolarPanelsService],
})
export class SolarPanelsModule {}
