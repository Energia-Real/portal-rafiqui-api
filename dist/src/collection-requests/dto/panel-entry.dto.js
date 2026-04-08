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
exports.PanelEntryDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class PanelEntryDto {
    quantity;
    brand;
    model;
    catalogId;
    isCustom;
    customBrand;
    customModel;
    static _OPENAPI_METADATA_FACTORY() {
        return { quantity: { required: true, type: () => Number, minimum: 1 }, brand: { required: true, type: () => String }, model: { required: true, type: () => String }, catalogId: { required: false, type: () => String, format: "uuid" }, isCustom: { required: true, type: () => Boolean }, customBrand: { required: false, type: () => String }, customModel: { required: false, type: () => String } };
    }
}
exports.PanelEntryDto = PanelEntryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Cantidad de paneles de este tipo', example: 5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PanelEntryDto.prototype, "quantity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Marca del panel', example: 'LONGi Solar' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PanelEntryDto.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Modelo del panel', example: 'Hi-MO 6' }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PanelEntryDto.prototype, "model", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID del catálogo si es panel conocido' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], PanelEntryDto.prototype, "catalogId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Indica si es un panel personalizado (no del catálogo)', example: false }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], PanelEntryDto.prototype, "isCustom", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Marca personalizada si isCustom=true' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PanelEntryDto.prototype, "customBrand", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Modelo personalizado si isCustom=true' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PanelEntryDto.prototype, "customModel", void 0);
//# sourceMappingURL=panel-entry.dto.js.map