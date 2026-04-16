import { Controller, Get } from '@nestjs/common';
import { CompanyId } from '../tenancy/company.decorator';
import { FinanceService } from './finance.service';

@Controller('finance')
export class FinanceController {
  constructor(private readonly financeService: FinanceService) {}

  @Get('summary')
  summary(@CompanyId() companyId: string) {
    return this.financeService.summary(companyId);
  }
}
