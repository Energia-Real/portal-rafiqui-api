"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarPanelsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SolarPanelsService = class SolarPanelsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getBrands() {
        const panels = await this.prisma.solarPanelCatalog.findMany({
            where: { isActive: true },
            select: { brand: true },
            distinct: ['brand'],
            orderBy: { brand: 'asc' },
        });
        return panels.map((p) => p.brand);
    }
    async getModelsByBrand(brand) {
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
    async getById(id) {
        return this.prisma.solarPanelCatalog.findUnique({
            where: { id },
        });
    }
};
exports.SolarPanelsService = SolarPanelsService;
exports.SolarPanelsService = SolarPanelsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SolarPanelsService);
//# sourceMappingURL=solar-panels.service.js.map