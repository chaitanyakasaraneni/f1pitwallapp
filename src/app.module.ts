import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CircuitsModule } from './modules/circuits/circuits.module';
import { ConstructorsModule } from './modules/constructors/constructors.module';
import { typeORMConfig } from './typeormDataSource';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORMConfig),
    CircuitsModule,
    ConstructorsModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply()
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
