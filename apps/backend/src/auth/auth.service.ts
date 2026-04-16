import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  login(email: string, password: string, companyId: string) {
    if (!email || !password || !companyId) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: 'user-dev', email, companyId, role: 'ADMIN' };

    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign({ ...payload, type: 'refresh' }, { expiresIn: '7d' }),
      user: payload,
    };
  }
}
