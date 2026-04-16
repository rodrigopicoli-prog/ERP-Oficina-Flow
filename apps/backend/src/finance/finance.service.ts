import { Injectable } from '@nestjs/common';

@Injectable()
export class FinanceService {
  summary(companyId: string) {
    return {
      companyId,
      accountsPayableOpen: 0,
      accountsReceivableOpen: 0,
      cashBalance: 0,
    };
  }
}
