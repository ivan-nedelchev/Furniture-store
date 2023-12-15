import * as utils from "./util.js"
import { showCreate } from './views/create.js';
import { showIndex } from './views/index.js'
import {showLogin } from './views/login.js'
import { showRegister } from './views/register.js';
let divContainer = document.querySelector("div.container");
let page = utils.page;
page(addToContext)
page('/login', showLogin)
page('/', showIndex)
page('/create', showCreate)
page('/register', showRegister)


page.start()
function addToContext(ctx, next) {

    Object.assign(ctx, {divContainer, utils})
    next()
}