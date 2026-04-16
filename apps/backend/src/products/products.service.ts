import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

type Product = {
  id: string;
  companyId: string;
  code: string;
  description: string;
  type: 'PRODUCT' | 'SERVICE';
  price: number;
  stock: number;
};

@Injectable()
export class ProductsService {
  private readonly products: Product[] = [];

  list(companyId: string) {
    return this.products.filter((item) => item.companyId === companyId);
  }

  create(companyId: string, payload: Omit<Product, 'id' | 'companyId'>) {
    const item: Product = { id: randomUUID(), companyId, ...payload };
    this.products.push(item);
    return item;
  }
}
