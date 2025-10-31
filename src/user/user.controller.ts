import { Body, Controller, Delete, Get, Patch, Post, Put, UseGuards, UseInterceptors } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user.dto";
import { UserService } from "./user.service";
import { LogInterceptor } from "src/interceptors/log.interceptor";
import { ParamId } from "src/decorators/param-id.decorator";
import { Role } from "src/enums/role.enums";
import { Roles } from "src/decorators/roles.decorator";
import { RoleGuard } from "src/guards/role.guard";
import { AuthGuard } from "src/guards/auth.guard";

@UseGuards(AuthGuard, RoleGuard)
@UseInterceptors(LogInterceptor) // para controlar todas as rotas da classe UserController @Post, @Get, @Put, @Patch, @Delete 
@Controller('users')
export class UserController {

    constructor(private readonly userSevice: UserService){}

    //@UseInterceptors(LogInterceptor) quando está dentro do construtor fica individual para cada rota.
    @Roles(Role.Admin)
    @Post()
    async create(@Body() data: CreateUserDTO){
        return this.userSevice.create(data);        
    }

    @Roles(Role.Admin, Role.User)
    @Get()
    async list() {
        return this.userSevice.list();
    }

    
    @Get(':id')
    async show(@ParamId() id: number) {
        console.log({id});
        return this.userSevice.show(id);
    }

    @Roles(Role.Admin)
    @Put(':id')
    async update(@Body() data: UpdatePutUserDTO, @ParamId() id: number) {
        return this.userSevice.update(id, data);

    }

    @Roles(Role.Admin)
    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @ParamId() id: number) {
        return this.userSevice.updatePartial(id, data);

    }

    @Roles(Role.Admin)
    @Delete(':id')
    async delete(@ParamId() id: number) {
        return this.userSevice.delete(id);
    }

}