import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateChildDto } from "./dto/create-child-dto";
import { Genders } from "@prisma/client";


@Injectable()
export class ChildService {
    constructor(private prisma: PrismaService) { }

    async findAll() {
        return this.prisma.child.findMany();
    }
    async findOne(id: string) {
        return this.prisma.child.findMany({ where: { userId: id } });
    }

    async createOrUpdate(child: CreateChildDto) {
        const birthday = new Date(
            child.birthday.endsWith('Z') ? child.birthday : child.birthday + 'Z'
        );
        if (isNaN(birthday.getTime())) throw new Error('Invalid date');
        
        if (child.id) {
            return this.prisma.child.update({
                where: { id: child.id },
                data: {
                    firstName: child.firstName,
                    lastName: child.lastName,
                    birthday,
                    gender: child.gender,
                    weight: child.weight,
                    height: child.height,
                    userId: child.userId,
                },
            });
        } else {
            return this.prisma.child.create({
                data: {
                    firstName: child.firstName,
                    lastName: child.lastName,
                    birthday,
                    gender: child.gender,
                    weight: child.weight,
                    height: child.height,
                    userId: child.userId,
                },
            });
        }

    }
}