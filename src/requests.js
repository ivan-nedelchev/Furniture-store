import * as api from "./api.js"
import page from "../node_modules/page/page.mjs"
let userNav = document.getElementById("user")
let guestNav = document.getElementById("guest")

let paths = {
    login: "/users/login",
    register: "/users/register",
    logout: "/users/logout",
    create: "/data/catalog",
    getCatalog: "/data/catalog",
    getDetails: "/data/catalog/",
}


export async function deleteItem(id) {
    let response = await api.del(paths.getDetails + id);
    return response;
}


export async function postItem(data) {
    let response = await api.post(paths.create, data)
    return response
}

export async function getDetails(id) {
    let response = await api.get(paths.getDetails + id)
    return response
}

export async function getFurniture(myFurniture) {
        
    if (myFurniture) {
        let userId = (JSON.parse(localStorage.getItem("user")))._id
        let response = await api.get(paths.getCatalog + `?where=_ownerId%3D%22${userId}%22`)
        return response
    } else {
        let response = await api.get(paths.getCatalog)
        return response
    }
}

export async function loginUser(email, password) {
    let result = await api.post(paths.login, { email, password });
    return result;
}
export async function registerUser(email, password) {
    let result = await api.post(paths.register, { email, password });
    return result;
}

export function saveLogin(loginInfo) {
    let userInfo = JSON.stringify(loginInfo)
    localStorage.setItem("user", userInfo)
}
export function updateNav() {
    let user = localStorage.getItem('user')
    if (user) {
        userNav.style.display = "inline-block"
        guestNav.style.display = "none"
    } else {
        userNav.style.display = "none"
        guestNav.style.display = "inline-block"
    }
}
export async function logout() {
    await api.get(paths.logout)
    localStorage.clear()
    page('/')
    updateNav()
}
//· Register User (POST): http://localhost:3030/users/register

// · Login User (POST): http://localhost:3030/users/login ·
//Logout User (GET): http://localhost:3030/users/logout

// · Create Furniture (POST): http://localhost:3030/data/catalog

// · All Furniture (GET): http://localhost:3030/data/catalog ·
// Furniture Details (GET): http://localhost:3030/data/catalog/:id ·
// Update Furniture (PUT): http://localhost:3030/data/catalog/:id

// · Delete Furniture (DELETE): http://localhost:3030/data/catalog/:id

// · My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22