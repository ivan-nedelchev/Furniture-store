import {page, html, render} from './util.js'
import { showIndex } from './views/index.js'
import { showLogin } from './views/login.js'

page(addToContext)
page('/login', showLogin)
page('/', showIndex)
page.start()

function addToContext(ctx, next) {
    ctx.page = page;
    ctx.html = html;
    ctx.render = render;
    ctx.wtf = "wtf"
    next()
}