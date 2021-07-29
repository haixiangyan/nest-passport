import {Injectable} from "@nestjs/common";
import {BasicStrategy as Strategy} from "passport-http";
import {PassportStrategy} from "@nestjs/passport";

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  async validate() {
    console.log('No console.log here')
    return {name: 'Jack'}
  }
}
