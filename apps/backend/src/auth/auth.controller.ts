import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Body() body: { email: string; password: string; companyId: string }) {
    return this.authService.login(body.email, body.password, body.companyId);
  }

  @Get('profile')
  profile() {
    return { message: 'Proteja esta rota com JWT guard na próxima etapa.' };
  }
}
