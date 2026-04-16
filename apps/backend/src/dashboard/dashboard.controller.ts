import { Controller, Get } from '@nestjs/common';
import { CompanyId } from '../tenancy/company.decorator';

@Controller('dashboard')
export class DashboardController {
  @Get('kpis')
  kpis(@CompanyId() companyId: string) {
    return {
      companyId,
      openServiceOrders: 0,
      inProgressServiceOrders: 0,
      completedToday: 0,
      pendingQuotes: 0,
      dailyRevenue: 0,
      avgTicket: 0,
      vehiclesInYard: 0,
      lowStockItems: 0,
    };
  }
}
