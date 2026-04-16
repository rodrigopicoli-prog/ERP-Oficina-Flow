import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyId } from '../tenancy/company.decorator';
import { VehiclesService } from './vehicles.service';

@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Get()
  list(@CompanyId() companyId: string) {
    return this.vehiclesService.list(companyId);
  }

  @Post()
  create(
    @CompanyId() companyId: string,
    @Body() body: { customerId: string; plate: string; brand: string; model: string; year?: number },
  ) {
    return this.vehiclesService.create(companyId, body);
  }
}
