import {Injectable} from "@nestjs/common";
import {Strategy} from 'passport-custom';
import {PassportStrategy} from "@nestjs/passport";

@Injectable()
export class CustomStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  async validate(request) {
    console.log('custom strategy')
    console.log('body', request.body)
    console.log('query', request.query)
    return request.body
  }
}
