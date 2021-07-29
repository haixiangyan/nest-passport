import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {UserModule} from "../user/user.module";
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./local.strategy";
import {BasicStrategy} from "./basic.strategy";
import {CookieStrategy} from "./cookie.strategy";
import {CustomStrategy} from "./custom.strategy";

@Module({
  imports: [UserModule, PassportModule],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, BasicStrategy, CookieStrategy, CustomStrategy]
})
export class AuthModule {}
