import { IsBoolean, IsNumber, IsOptional, IsString, IsUUID, Min } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PanelEntryDto {
  @ApiProperty({ description: 'Cantidad de paneles de este tipo', example: 5 })
  @IsNumber()
  @Min(1)
  quantity: number;

  @ApiProperty({ description: 'Marca del panel', example: 'LONGi Solar' })
  @IsString()
  brand: string;

  @ApiProperty({ description: 'Modelo del panel', example: 'Hi-MO 6' })
  @IsString()
  model: string;

  @ApiPropertyOptional({ description: 'ID del catálogo si es panel conocido' })
  @IsOptional()
  @IsUUID()
  catalogId?: string;

  @ApiProperty({ description: 'Indica si es un panel personalizado (no del catálogo)', example: false })
  @IsBoolean()
  isCustom: boolean;

  @ApiPropertyOptional({ description: 'Marca personalizada si isCustom=true' })
  @IsOptional()
  @IsString()
  customBrand?: string;

  @ApiPropertyOptional({ description: 'Modelo personalizado si isCustom=true' })
  @IsOptional()
  @IsString()
  customModel?: string;
}
