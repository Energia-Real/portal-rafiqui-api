import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SolarPanelsService {
  constructor(private prisma: PrismaService) {}

  async getBrands(): Promise<string[]> {
    const panels = await this.prisma.solarPanelCatalog.findMany({
      where: { isActive: true },
      select: { brand: true },
      distinct: ['brand'],
      orderBy: { brand: 'asc' },
    });

    return panels.map((p) => p.brand);
  }

  async getModelsByBrand(brand: string) {
    const panels = await this.prisma.solarPanelCatalog.findMany({
      where: {
        brand: {
          equals: brand,
          mode: 'insensitive',
        },
        isActive: true,
      },
      select: {
        id: true,
        model: true,
        technology: true,
        powerWp: true,
        efficiencyPercent: true,
        application: true,
      },
      orderBy: { model: 'asc' },
    });

    return panels;
  }

  async getAll() {
    return this.prisma.solarPanelCatalog.findMany({
      where: { isActive: true },
      orderBy: [{ brand: 'asc' }, { model: 'asc' }],
    });
  }

  async getById(id: string) {
    return this.prisma.solarPanelCatalog.findUnique({
      where: { id },
    });
  }
}
