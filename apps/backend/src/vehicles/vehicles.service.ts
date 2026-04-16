import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

type Vehicle = {
  id: string;
  companyId: string;
  customerId: string;
  plate: string;
  brand: string;
  model: string;
  year?: number;
};

@Injectable()
export class VehiclesService {
  private readonly vehicles: Vehicle[] = [];

  list(companyId: string) {
    return this.vehicles.filter((item) => item.companyId === companyId);
  }

  create(companyId: string, payload: Omit<Vehicle, 'id' | 'companyId'>) {
    const item: Vehicle = { id: randomUUID(), companyId, ...payload };
    this.vehicles.push(item);
    return item;
  }
}
