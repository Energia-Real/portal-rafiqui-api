import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PartnersService {
  constructor(private prisma: PrismaService) {}

  async findAll(isActive?: boolean) {
    const where: any = {};
    
    if (isActive !== undefined) {
      where.isActive = isActive;
    }

    return this.prisma.partner.findMany({
      where,
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: string) {
    return this.prisma.partner.findUnique({
      where: { id },
    });
  }

  async findBySlug(slug: string) {
    return this.prisma.partner.findUnique({
      where: { slug },
    });
  }

  async getTypes() {
    const partners = await this.prisma.partner.findMany({
      where: { isActive: true },
      select: { type: true },
      distinct: ['type'],
    });

    return partners.map((p) => p.type);
  }
}
