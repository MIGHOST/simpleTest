import Koa from 'koa';
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

