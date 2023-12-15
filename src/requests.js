import * as api from "./api.js"

let paths = {
    login : "/users/login",
    register : "/users/register",
    logout : "/users/logout",
    create : "/data/catalog",
    getCatalog : "/data/catalog",


}

export async function loginUser(email, password) {
    let result = api.post(email, password);
    return result;
}

//· Register User (POST): http://localhost:3030/users/register

// · Login User (POST): http://localhost:3030/users/login · Logout User (GET): http://localhost:3030/users/logout

// · Create Furniture (POST): http://localhost:3030/data/catalog

// · All Furniture (GET): http://localhost:3030/data/catalog · 
// Furniture Details (GET): http://localhost:3030/data/catalog/:id · 
// Update Furniture (PUT): http://localhost:3030/data/catalog/:id

// · Delete Furniture (DELETE): http://localhost:3030/data/catalog/:id

// · My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22