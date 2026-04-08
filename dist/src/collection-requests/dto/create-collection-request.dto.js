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
exports.CreateCollectionRequestDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
const panel_entry_dto_1 = require("./panel-entry.dto");
class CreateCollectionRequestDto {
    donorId;
    pickupAddress;
    street;
    exteriorNumber;
    interiorNumber;
    colonia;
    municipio;
    estado;
    city;
    postalCode;
    estimatedCount;
    panelType;
    contactName;
    contactPhone;
    notes;
    panels;
    partnerId;
    wantsToBePartner;
    static _OPENAPI_METADATA_FACTORY() {
        return { donorId: { required: false, type: () => String, format: "uuid" }, pickupAddress: { required: true, type: () => String }, street: { required: true, type: () => String }, exteriorNumber: { required: true, type: () => String }, interiorNumber: { required: false, type: () => String }, colonia: { required: true, type: () => String }, municipio: { required: true, type: () => String }, estado: { required: true, type: () => String }, city: { required: true, type: () => String }, postalCode: { required: true, type: () => String }, estimatedCount: { required: true, type: () => Number, minimum: 1 }, panelType: { required: true, type: () => Object }, contactName: { required: true, type: () => String }, contactPhone: { required: true, type: () => String }, notes: { required: false, type: () => String }, panels: { required: false, type: () => [require("./panel-entry.dto").PanelEntryDto] }, partnerId: { required: false, type: () => String, format: "uuid" }, wantsToBePartner: { required: false, type: () => Boolean } };
    }
}
exports.CreateCollectionRequestDto = CreateCollectionRequestDto;
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "donorId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "pickupAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "exteriorNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "interiorNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "colonia", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "municipio", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "estado", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateCollectionRequestDto.prototype, "estimatedCount", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(['residential', 'industrial']),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "panelType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "contactName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "contactPhone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "notes", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Lista de paneles a recolectar',
        type: [panel_entry_dto_1.PanelEntryDto]
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => panel_entry_dto_1.PanelEntryDto),
    __metadata("design:type", Array)
], CreateCollectionRequestDto.prototype, "panels", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'ID del socio/partner asociado' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], CreateCollectionRequestDto.prototype, "partnerId", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ description: 'Indica si el usuario quiere convertirse en socio', default: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateCollectionRequestDto.prototype, "wantsToBePartner", void 0);
//# sourceMappingURL=create-collection-request.dto.js.map