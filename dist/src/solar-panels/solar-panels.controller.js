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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolarPanelsController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const solar_panels_service_1 = require("./solar-panels.service");
let SolarPanelsController = class SolarPanelsController {
    solarPanelsService;
    constructor(solarPanelsService) {
        this.solarPanelsService = solarPanelsService;
    }
    getBrands() {
        return this.solarPanelsService.getBrands();
    }
    getModelsByBrand(brand) {
        return this.solarPanelsService.getModelsByBrand(brand);
    }
    getAll() {
        return this.solarPanelsService.getAll();
    }
    getById(id) {
        return this.solarPanelsService.getById(id);
    }
};
exports.SolarPanelsController = SolarPanelsController;
__decorate([
    (0, common_1.Get)('brands'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todas las marcas de paneles solares' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de marcas únicas',
        schema: {
            example: ['Canadian Solar', 'JA Solar', 'LONGi Solar', 'Trina Solar'],
        },
    }),
    openapi.ApiResponse({ status: 200, type: [String] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolarPanelsController.prototype, "getBrands", null);
__decorate([
    (0, common_1.Get)('models/:brand'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener modelos de paneles por marca' }),
    (0, swagger_1.ApiParam)({ name: 'brand', description: 'Nombre de la marca', example: 'LONGi Solar' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de modelos de la marca especificada',
        schema: {
            example: [
                {
                    id: 'uuid',
                    model: 'Hi-MO 6',
                    technology: 'HJT',
                    powerWp: 580,
                    efficiencyPercent: 22.8,
                    application: 'COMMERCIAL',
                },
            ],
        },
    }),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('brand')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolarPanelsController.prototype, "getModelsByBrand", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener todo el catálogo de paneles solares' }),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SolarPanelsController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener un panel por ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', description: 'ID del panel' }),
    openapi.ApiResponse({ status: 200, type: Object }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SolarPanelsController.prototype, "getById", null);
exports.SolarPanelsController = SolarPanelsController = __decorate([
    (0, swagger_1.ApiTags)('Solar Panels Catalog'),
    (0, common_1.Controller)('solar-panels'),
    __metadata("design:paramtypes", [solar_panels_service_1.SolarPanelsService])
], SolarPanelsController);
//# sourceMappingURL=solar-panels.controller.js.map