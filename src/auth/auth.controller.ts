import {Controller, Post, UseGuards, Request} from '@nestjs/common';
import {LocalAuthGuard} from "./local-auth.guard";

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() request) {
    return request.user
  }
}