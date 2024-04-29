import { IGetUser } from '@SRC/cammons/interfaces/get-user';
import { PrismaService } from '@SRC/prisma.service';
import { UsersService } from '@SRC/users/users.service';
import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';

export const GetUser = createParamDecorator(async (data: unknown, ctx: ExecutionContext): Promise<IGetUser> => {
    const prismaService = new PrismaService();
    const request = ctx.switchToHttp().getRequest();
    return await prismaService.usuarios.findUniqueOrThrow({
        where: {
            id: request.user.sub
        }
    }).then(e => e).catch(_ => { throw new UnauthorizedException() })
});