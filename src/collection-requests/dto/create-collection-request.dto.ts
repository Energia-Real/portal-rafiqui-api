import { IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Min, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { PanelEntryDto } from './panel-entry.dto';

export class CreateCollectionRequestDto {
  @IsUUID()
  @IsOptional()
  donorId?: string;

  @IsString()
  @IsNotEmpty()
  pickupAddress: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  exteriorNumber: string;

  @IsString()
  @IsOptional()
  interiorNumber?: string;

  @IsString()
  @IsNotEmpty()
  colonia: string;

  @IsString()
  @IsNotEmpty()
  municipio: string;

  @IsString()
  @IsNotEmpty()
  estado: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @IsNumber()
  @Min(1)
  estimatedCount: number;

  @IsEnum(['residential', 'industrial'])
  panelType: 'residential' | 'industrial';

  @IsString()
  @IsNotEmpty()
  contactName: string;

  @IsString()
  @IsNotEmpty()
  contactPhone: string;

  @IsString()
  @IsOptional()
  notes?: string;

  @ApiPropertyOptional({ 
    description: 'Lista de paneles a recolectar', 
    type: [PanelEntryDto] 
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PanelEntryDto)
  panels?: PanelEntryDto[];

  @ApiPropertyOptional({ description: 'ID del socio/partner asociado' })
  @IsOptional()
  @IsUUID()
  partnerId?: string;

  @ApiPropertyOptional({ description: 'Indica si el usuario quiere convertirse en socio', default: false })
  @IsOptional()
  @IsBoolean()
  wantsToBePartner?: boolean;
}
