import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { VehiclesModule } from './vehicles/vehicles.module';
import { ProductsModule } from './products/products.module';
import { ServiceOrdersModule } from './service-orders/service-orders.module';
import { FinanceModule } from './finance/finance.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    AuthModule,
    CustomersModule,
    VehiclesModule,
    ProductsModule,
    ServiceOrdersModule,
    FinanceModule,
    DashboardModule,
  ],
})
export class AppModule {}
