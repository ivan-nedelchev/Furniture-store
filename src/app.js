import * as utils from "./util.js"
import { showCreate } from './views/create.js';
import { showIndex } from './views/index.js'
import {showLogin } from './views/login.js'
import { showRegister } from './views/register.js';
import { showDetails } from "./views/details.js";
import { logout, updateNav } from "./requests.js";
let divContainer = document.querySelector("div.container");
let page = utils.page;
page(addToContext)
page('/login', showLogin)
page('/', showIndex)
page('/create', showCreate)
page('/register', showRegister)
page('/data/catalog/:id', showDetails)
page('/my-furniture', showIndex)


document.getElementById('logoutBtn').addEventListener('click', logout)

updateNav()
page.start()
function addToContext(ctx, next) {

    Object.assign(ctx, {divContainer, utils})
    next()
}