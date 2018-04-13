import {Module} from '@nestjs/common';

import {RouterModule} from 'nest-router';

import {EchoModule} from './echo/echo.module';
import {ExchangeModule} from './exchange/exchange.module';
import {JobModule} from './job/job.module';
import {RootController} from './root.controller';
import {routes} from './routes';

@Module({
  modules: [RouterModule.forRoutes(routes), EchoModule, ExchangeModule, JobModule],
  controllers: [RootController],
})
export class ApplicationModule {}
