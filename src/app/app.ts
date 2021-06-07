import Koa from 'koa';
import json from 'koa-json';
import HttpStatus from 'http-status-codes';
import postRouter from './posts/posts.router';

const app: Koa = new Koa();

app.use(json());
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.statusCode || error.status || HttpStatus.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = { error };
    ctx.app.emit('error', error, ctx);
  }
});
app.use(postRouter.routes()).use(postRouter.allowedMethods());
app.use(async (ctx: Koa.Context) => ctx.body = 'Server is working!');

app.on('error', console.error);

export default app;

