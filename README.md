# nest-passport

[Nest.js](https://nestjs.com/) + [Passport](http://www.passportjs.org/) 的最简单实现，包含各种基本身份验证场景。

## passport-local | passport-http

[passport-local](http://www.passportjs.org/packages/passport-local/) 和 [passport-http](http://www.passportjs.org/packages/passport-http/)
是差不多的东西，以 `username` 和 `password` 来做身份校验，一般这两个包只用来登录然后下发 `token`。

## passport-jwt

[passport-jwt](http://www.passportjs.org/packages/passport-jwt/) 用处很大，用于简单的 JWT Token，

## passport-cookie

有的时候，我们并不一定从 `headers` 拿到 `token` 后就立马解 `token` 了，可能只从 `cookies` 里拿到，再调别的接口再去解 `token`。

这里可以使用 [passport-cookie](http://www.passportjs.org/packages/passport-cookie/) 从 `cookies` 直接获取 `token` 再作进一步的操作。

## passport-custom

[passport-custom](http://www.passportjs.org/packages/passport-custom/) 则使用更自由，直接提供 `request` 由开发者自己玩。

有一种场景就是，前端在发 `GET` 请求时，将 `token` 放到 `query` 上，发 `POST` 请求时，将 `token` 放到 `body` 上，那么后端就可以用
这个包从对应的请求获取 `token`。

虽然这种方式很 Low，但是在一些自由的场景下是很有用处的。
