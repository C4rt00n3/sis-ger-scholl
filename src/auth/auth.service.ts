import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { CraeteLogin } from './dto/created.login';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService
  ) { }

  async signIn({ email, password }: CraeteLogin): Promise<any> {
   try {
    const user = await this.usersService.findByEmail(email);
    const isValidUser = bcrypt.compareSync(password, user.senha)
    console.log("=====", isValidUser)
    if (!isValidUser) {
      throw new UnauthorizedException();
    }

    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
   }catch (error: any) {
    throw new UnauthorizedException("Email/Senha ivalidos")
   }
  }
}