import {Injectable} from "@nestjs/common";
import {Strategy} from 'passport-cookie';
import {PassportStrategy} from "@nestjs/passport";

@Injectable()
export class CookieStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({cookieName: 'auth', passReqToCallback: true});
  }

  async validate(request, token) {
    console.log('cookie strategy')
    console.log('req', request.cookies)
    console.log('token', token)
    return {token}
  }
}
