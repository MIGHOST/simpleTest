import Koa from 'koa';
import json from 'koa-json';
import HttpStatus from 'http-status-codes';
import userRouter from '../users/users.router';

const app:Koa = new Koa();

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
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(async (ctx:Koa.Context) => ctx.body = {'message':'Server is working'});

app.on('error', console.error);

export default app;



// app.use(staticCache(__dirname + '/public', { maxAge: 100000 }));

// app.use(bodyParser());
// app.use(
//   cors({
//     origin: "*"
//   })
// );
// app.use(logger());

// const staticConfig = {
//   gzip: true,
//   prefix: `/posts`,
//   maxAge: 60 
// } as staticCache.Options;

// app.use(staticCache(
//   path.join(__dirname,`./static`), staticConfig
// ));
