let url = "http://localhost:3030";

async function request(method, path, data) {
    if(data) {
        let options = {
            method,
            headers : {
            "Content-type" : "application/json"
            },
            body : JSON.stringify(data)
        }
    }
    let response = await fetch(url + path, options);
    let responseObj = response.json()
    return responseObj;
}

let get = (path) => request("GET", path);
let put = (path) => request("PUT", path, data);
let del = (path) => request("DELETE", path, data);
let post = (path) => request("POST", path, data);

export {
    get,
    put,
    del as delete,
    post
}