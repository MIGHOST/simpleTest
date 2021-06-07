import axios from 'axios';
import Koa from 'koa';
import Router from 'koa-router';
import { baseUrl } from './../config';
// import redis from 'redis';
const routerOpts: Router.IRouterOptions = {
  prefix: '/posts',
};
const userRouter: Router = new Router(routerOpts);


userRouter.get('/all', async (ctx: Koa.Context) => { 
  try{
    const result = await axios.get(`${baseUrl}`);
    ctx.body = {
      data: result.data
    };  
    } catch (err) {
      console.error(err);
    }
  
});
userRouter.get('/:id', async (ctx: Koa.Context) => {
  try {
    const postId = ctx.params.id;
    const result = await axios.get(`${baseUrl}/${postId}`)
    ctx.body = {
      data: result.data
    };
  } catch (err) {
    console.error(err);
  }
});

export default userRouter;

// const routerOpts: Router.IRouterOptions = {
//   prefix: '/posts',
// };
// const userRouter: Router = new Router(routerOpts);
// const REDIS_PORT: number = Number(config.redisPort); 
// const client = redis.createClient(REDIS_PORT)

// export const cacheMiddleware: any = (duration: number) => {

//     return (ctx: Koa.Context, next:any) => {
//         const cacheBody = cache?.test;
//         if (cacheBody) {
//             console.log(' sent from cache');
//             console.log('cache', cache);
//             ctx.body = {
//                 data: cacheBody
//             };// sent from cache
//             return;
//         } else {
//             console.log('test');
//             setTimeout(() => {
//                 console.log('cache null' + duration * 1000 + 'c');
//                 cache.test = null; 
//                 console.log('cache', cache);
//             }, duration * 1000);

//             next();
//         }
//     };
// };



// userRouter.get('/:id', async (ctx: Koa.Context) => {
//   try {
//     const postId = ctx.params.id;
//     const result = await axios.get(`${baseUrl}/${postId}`)
//     ctx.body = {
//       data: result.data
//     };
//     const appCache: any = result;
//     client.SETEX(postId, 3600, appCache);
//     ctx.set(setResponse(postId: any, appCache: any))
//   } catch (err) {
//     console.error(err);
//   }
// });

// userRouter.get(`/all`, cacheMiddleware(5), async (ctx: Koa.Context) => {
//   try{
//     const result = await axios.get(`${baseUrl}`);
//     cache.test = result.data;
//     ctx.body = {
//       data: result.data
//     };  
//     } catch (err) {
//       console.error(err);
//     }
  
// });

// userRouter.get('/:id', (ctx: Koa.Context) => {
//   const postId = ctx.params.id;
//   try {
//       client.get(postId, async (err, result) => {
//           if (err) throw err;
  
//           if (result) {
//             ctx.body = {
//               status: 200,
//                 result: JSON.parse(result),
//                 message: "data retrieved from the cache"
//             }          
//           } else {
//               const result = await await axios.get(`${baseUrl}/${postId}`)
//               client.SETEX(postId, 600, JSON.stringify(result.data));
//               ctx.body = {
//                 status: 200,
//                   result: result.data,
//                   message: "data retrieved from the cache"
//               }     
//           }
//       });
//   } catch(err) {
//     ctx.body = {
//             status: 500,
//             message: err.message
//           };       
//   }
// });



