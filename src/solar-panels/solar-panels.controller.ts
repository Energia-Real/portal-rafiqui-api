import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SolarPanelsService } from './solar-panels.service';

@ApiTags('Solar Panels Catalog')
@Controller('solar-panels')
export class SolarPanelsController {
  constructor(private readonly solarPanelsService: SolarPanelsService) {}

  @Get('brands')
  @ApiOperation({ summary: 'Obtener todas las marcas de paneles solares' })
  @ApiResponse({
    status: 200,
    description: 'Lista de marcas únicas',
    schema: {
      example: ['Canadian Solar', 'JA Solar', 'LONGi Solar', 'Trina Solar'],
    },
  })
  getBrands() {
    return this.solarPanelsService.getBrands();
  }

  @Get('models/:brand')
  @ApiOperation({ summary: 'Obtener modelos de paneles por marca' })
  @ApiParam({ name: 'brand', description: 'Nombre de la marca', example: 'LONGi Solar' })
  @ApiResponse({
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
  })
  getModelsByBrand(@Param('brand') brand: string) {
    return this.solarPanelsService.getModelsByBrand(brand);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener todo el catálogo de paneles solares' })
  getAll() {
    return this.solarPanelsService.getAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un panel por ID' })
  @ApiParam({ name: 'id', description: 'ID del panel' })
  getById(@Param('id') id: string) {
    return this.solarPanelsService.getById(id);
  }
}
