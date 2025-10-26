// src/modules/users/users.service.ts
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) { }

  async createOrUpdate(data: CreateUserDto) {
    if (!data.id) {
      throw new Error('Firebase UID (id) is required');
    }

    return this.prisma.user.upsert({
      where: { id: data.id },
      update: {
        email: data.email,
        name: data.name,
        photoUrl: data.photoUrl,
        preferedLanguage: data.preferedLanguage,
      },
      create: {
        id: data.id,
        email: data.email,
        name: data.name,
        photoUrl: data.photoUrl,
        preferedLanguage: data.preferedLanguage,
      },
    });
  }


  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOne(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
