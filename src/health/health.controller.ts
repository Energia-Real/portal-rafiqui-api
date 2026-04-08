import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      service: 'portal-rafiqui-api',
      environment: (globalThis as any).process?.env?.NODE_ENV || 'unknown',
    };
  }
}
