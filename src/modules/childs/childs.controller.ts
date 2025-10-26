import { Body, Controller, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ChildService } from "./childs.service";
import { CreateChildDto } from "./dto/create-child-dto";



@Controller('childs')
export class ChildsController {
    constructor(private readonly childService: ChildService) {}

    @Get('/')
    async findAll() {
        return this.childService.findAll();
    }

    @Get('/:id')
    async findOne(@Param('id') id: string) {
        return this.childService.findOne(id);
    }

    @Post('/')
    @HttpCode(200)
    async createOrUpdate(@Body() child: CreateChildDto) {
        return this.childService.createOrUpdate(child);
    }
}