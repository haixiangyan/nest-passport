import {Controller, Post, UseGuards, Request, Get} from '@nestjs/common';
import {LocalAuthGuard} from "./local-auth.guard";
import {BasicAuthGuard} from "./basic-auth.guard";
import {CookieAuthGuard} from "./cookie-auth.guard";
import {CustomAuthGuard} from "./custom-auth.guard";

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('local-post')
  async localPost(@Request() request) {
    return request.user
  }

  @UseGuards(LocalAuthGuard)
  @Get('local-get')
  async localGet(@Request() request) {
    return request.user
  }

  @UseGuards(BasicAuthGuard)
  @Post('basic-post')
  async basicPost(@Request() request) {
    return request.user
  }

  @UseGuards(CookieAuthGuard)
  @Post('cookie-post')
  async cookiePost(@Request() request) {
    return request.user
  }

  @UseGuards(CookieAuthGuard)
  @Get('cookie-get')
  async cookieGet(@Request() request) {
    return request.user
  }

  @UseGuards(CustomAuthGuard)
  @Get('custom-get')
  async customGet(@Request() request) {
    return request.user
  }

  @UseGuards(CustomAuthGuard)
  @Post('custom-post')
  async customPost(@Request() request) {
    return request.user
  }
}
