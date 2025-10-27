import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthController } from "./auth.controller";
import { UserModule } from "src/user/user.module";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [
        JwtModule.register({
        secret: `&O,H$2%U_M9kRu{u"@dxGrG+pWReQse`
        }),
        UserModule,
        PrismaModule,
    ],
    controllers: [AuthController]
})
export class AuthModule {

}