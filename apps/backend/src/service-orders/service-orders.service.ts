import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

type ServiceOrderStatus =
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

type ServiceOrderItem = {
  description: string;
  qty: number;
  unitPrice: number;
  discount?: number;
};

type ServiceOrder = {
  id: string;
  companyId: string;
  code: string;
  customerId: string;
  vehicleId: string;
  km: number;
  status: ServiceOrderStatus;
  items: ServiceOrderItem[];
  createdAt: Date;
};

@Injectable()
export class ServiceOrdersService {
  private readonly orders: ServiceOrder[] = [];

  list(companyId: string) {
    return this.orders.filter((item) => item.companyId === companyId);
  }

  create(companyId: string, payload: Omit<ServiceOrder, 'id' | 'companyId' | 'createdAt'>) {
    const item: ServiceOrder = {
      id: randomUUID(),
      companyId,
      createdAt: new Date(),
      ...payload,
    };
    this.orders.push(item);
    return item;
  }
}
