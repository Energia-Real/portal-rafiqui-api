import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PartnersService } from './partners.service';

@ApiTags('Partners')
@Controller('partners')
export class PartnersController {
  constructor(private readonly partnersService: PartnersService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener catálogo de socios' })
  @ApiQuery({ name: 'active', required: false, description: 'Filtrar por estado activo (true/false)' })
  @ApiResponse({
    status: 200,
    description: 'Lista de socios',
    schema: {
      example: [
        {
          id: 'uuid',
          name: 'Beetmann',
          slug: 'beetmann',
          type: 'SOLAR_INSTALLER',
          status: 'ACTIVE',
          isActive: true,
        },
      ],
    },
  })
  findAll(@Query('active') active?: string) {
    const isActive = active === 'true' ? true : active === 'false' ? false : undefined;
    return this.partnersService.findAll(isActive);
  }

  @Get('types')
  @ApiOperation({ summary: 'Obtener tipos de socios disponibles' })
  @ApiResponse({
    status: 200,
    description: 'Lista de tipos de socios',
    schema: {
      example: ['SOLAR_INSTALLER', 'MANUFACTURER', 'ENERGY_PROVIDER', 'RECYCLER'],
    },
  })
  getTypes() {
    return this.partnersService.getTypes();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener un socio por ID' })
  @ApiParam({ name: 'id', description: 'ID del socio' })
  findOne(@Param('id') id: string) {
    return this.partnersService.findOne(id);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Obtener un socio por slug' })
  @ApiParam({ name: 'slug', description: 'Slug del socio', example: 'beetmann' })
  findBySlug(@Param('slug') slug: string) {
    return this.partnersService.findBySlug(slug);
  }
}
