import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CraeteLogin } from './dto/created.login';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Login")
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: CraeteLogin) {
    return this.authService.signIn(signInDto);
  }
}