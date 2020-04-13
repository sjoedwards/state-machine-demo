const Koa = require('koa');
const Router = require('@koa/router');
const races = require('./races')
const cors = require('@koa/cors');


const app = new Koa();
const router = new Router()

router.get("/races", (ctx, next) => {
  ctx.body = races
  return next
})

app.use(cors())
app.use(router.routes())
app.use(ctx => {
  console.log(ctx.headers)
})
app.listen(3001);