import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyId } from '../tenancy/company.decorator';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Get()
  list(@CompanyId() companyId: string) {
    return this.customersService.list(companyId);
  }

  @Post()
  create(
    @CompanyId() companyId: string,
    @Body() body: { name: string; document: string; personType: 'PF' | 'PJ'; email?: string },
  ) {
    return this.customersService.create(companyId, body);
  }
}
