import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CircuitsModule } from './modules/circuits/circuits.module';
import { typeORMConfig } from './typeormDataSource';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    CircuitsModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply()
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
