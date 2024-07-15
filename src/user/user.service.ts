import { Injectable } from '@nestjs/common';
import { type User } from '@prisma/client';
import { genSaltSync, hashSync } from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }

  save(user: Partial<User>) {
    return this.prismaService.user.create({
      data: {
        email: user.email,
        password: user.password,
        roles: ['USER'],
      },
    });
  }

  findOne(idOrMail: string) {
    return this.prismaService.user.findFirst({
      where: {
        OR: [{ id: idOrMail }, { email: idOrMail }],
      },
    });
  }

  delete(id: string) {
    return this.prismaService.user.delete({ where: { id } });
  }

  private hashPassword(password: string) {
    return hashSync(password, genSaltSync(10));
  }
}
