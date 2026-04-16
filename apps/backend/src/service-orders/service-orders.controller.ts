import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyId } from '../tenancy/company.decorator';
import { ServiceOrdersService } from './service-orders.service';

@Controller('service-orders')
export class ServiceOrdersController {
  constructor(private readonly serviceOrdersService: ServiceOrdersService) {}

  @Get()
  list(@CompanyId() companyId: string) {
    return this.serviceOrdersService.list(companyId);
  }

  @Post()
  create(
    @CompanyId() companyId: string,
    @Body()
    body: {
      code: string;
      customerId: string;
      vehicleId: string;
      km: number;
      status:
        | 'OPEN'
        | 'BUDGET'
        | 'WAITING_APPROVAL'
        | 'APPROVED'
        | 'IN_PROGRESS'
        | 'WAITING_PART'
        | 'FINISHED'
        | 'DELIVERED'
        | 'CANCELED'
        | 'INACTIVE';
      items: Array<{ description: string; qty: number; unitPrice: number; discount?: number }>;
    },
  ) {
    return this.serviceOrdersService.create(companyId, body);
  }
}
