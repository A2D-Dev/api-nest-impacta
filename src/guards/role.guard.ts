import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { ROLES_KEY } from "src/decorators/roles.decorator";
import { Role } from "src/enums/role.enums";


@Injectable()
export class RoleGuard implements CanActivate {

    constructor(
        private readonly reflector: Reflector
    ) {}

    async canActivate(context: ExecutionContext) {

        const requerideRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [context.getHandler(), context.getClass()])
        
        if (!requerideRoles) {
            return true;
        }

        const {user} = context.switchToHttp().getRequest();

        console.log({requerideRoles, user});

        return true;
    }
}