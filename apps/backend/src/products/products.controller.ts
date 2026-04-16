import { Body, Controller, Get, Post } from '@nestjs/common';
import { CompanyId } from '../tenancy/company.decorator';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  list(@CompanyId() companyId: string) {
    return this.productsService.list(companyId);
  }

  @Post()
  create(
    @CompanyId() companyId: string,
    @Body()
    body: {
      code: string;
      description: string;
      type: 'PRODUCT' | 'SERVICE';
      price: number;
      stock: number;
    },
  ) {
    return this.productsService.create(companyId, body);
  }
}
