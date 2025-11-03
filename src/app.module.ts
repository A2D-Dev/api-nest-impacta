import { forwardRef, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ThrottlerModule.forRoot({
      // janela global: 60s, limite global: 10 req
      throttlers: [
        { ttl: 60 * 1000, limit: 10 },
      ],
    }),
    forwardRef(() => UserModule),
    forwardRef(() => AuthModule),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    // ✅ Guard global: aplica o rate limiting em tudo
    { provide: APP_GUARD, useClass: ThrottlerGuard },
  ],
  exports: [AppService],
})
export class AppModule {}
