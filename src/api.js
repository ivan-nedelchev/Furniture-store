let url = "http://localhost:3030";

async function request(method, path, data) {
    let options;
    if(data) {
        options = {
            method,
            headers : {
            "Content-type" : "application/json"
            },
            body : JSON.stringify(data)
        }
    } else {
        
    }
    let response = await fetch(url + path, options);
    let responseObj = await response.json()

    return responseObj;
}

let get = (path) => request("GET", path);
let put = (path, data) => request("PUT", path, data);
let del = (path, data) => request("DELETE", path, data);
let post = (path, data) => request("POST", path, data);

export {
    get,
    put,
    del as delete,
    post
}