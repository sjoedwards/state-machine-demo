const Koa = require('koa');
const Router = require('@koa/router');
const races = require('./races')

const app = new Koa();
const router = new Router()

router.get("/races", ctx => {
  ctx.body = races
})

app.use(router.routes())
app.listen(3001);