import { Module } from "@nestjs/common";
import { ChildsController } from "./childs.controller";
import { ChildService } from "./childs.service";
import { PrismaService } from "src/prisma/prisma.service";


@Module({
    controllers: [ChildsController],
    providers: [ChildService, PrismaService],
})
export class ChildModule {}