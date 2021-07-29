import {Controller, Post, UseGuards, Request} from '@nestjs/common';
import {LocalAuthGuard} from "./local-auth.guard";
import {BasicAuthGuard} from "./basic-auth.guard";

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('local-login')
  async localLogin(@Request() request) {
    return request.user
  }

  @UseGuards(BasicAuthGuard)
  @Post('basic-login')
  async basicLogin(@Request() request) {
    return request.user
  }
}
