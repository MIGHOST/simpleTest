import Router from 'koa-router';
import axios from 'axios';
import Koa from 'koa';
import NodeCache from 'node-cache';
import { baseUrl } from '../config';


const myCache: NodeCache = new NodeCache();

const routerOpts: Router.IRouterOptions = {
  prefix: '/posts',
};
const postRouter: Router = new Router(routerOpts);

postRouter.get('/all', async (ctx: Koa.Context) => {
  try {
    let newData = myCache.get("myKey");
    if (newData === undefined) {
      const result = await axios.get(`${baseUrl}`);
      newData = result.data;
      myCache.set("myKey", newData, 60)
    }
    ctx.body = {
      data: newData
    };
  } catch (err) {
    console.error(err);
  }

});
postRouter.get('/:id', async (ctx: Koa.Context) => {
  try {
    const postId = ctx.params.id;
    let newData = myCache.get(`${postId}`);
    if (newData === undefined) {
      const result = await axios.get(`${baseUrl}/${postId}`)
      newData = result.data;
      myCache.set(`${postId}`, newData, 60)
    }
    ctx.body = {
      data: newData
    };
  } catch (err) {
    console.error(err);
  }
});

export default postRouter;