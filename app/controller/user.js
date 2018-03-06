'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const {ctx, service} = this;

    const createRule = {
      userName: {type: 'string'},
      password: {type: 'string'},
    };

    ctx.validate(createRule);

    // const author = ctx.session.userId;
    // const req = Object.assign(ctx.request.body, {author});

    const res = await service.user.login(ctx.request.body);
    ctx.rotateCsrfSecret();

    if(!res.isok){
      ctx.status = 401;
      ctx.body = res;
    }else{
      ctx.status = 200;
      ctx.body = res.data;
    }
  }
}

module.exports = UserController;
