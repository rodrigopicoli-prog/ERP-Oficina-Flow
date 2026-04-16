import { randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';

type Customer = {
  id: string;
  companyId: string;
  name: string;
  document: string;
  personType: 'PF' | 'PJ';
  email?: string;
};

@Injectable()
export class CustomersService {
  private readonly customers: Customer[] = [];

  list(companyId: string) {
    return this.customers.filter((item) => item.companyId === companyId);
  }

  create(companyId: string, payload: Omit<Customer, 'id' | 'companyId'>) {
    const item: Customer = { id: randomUUID(), companyId, ...payload };
    this.customers.push(item);
    return item;
  }
}
