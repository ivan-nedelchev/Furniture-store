import { getFurniture } from "../requests.js";



let divContainer = document.querySelector("div.container");
let context;
let furtniture 
export let showIndex =  async (ctx) => {
    let myFurniture = false
    if(ctx.path == "/my-furniture") {
        myFurniture = true
         furtniture = await getFurniture("gosho")
    } else {
         furtniture = await getFurniture()
    }

    context = ctx;

    let indexView = () => ctx.utils.html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>${myFurniture? "My Furniture" : "Welcome to Furniture System"}</h1>
                <p>${myFurniture? "This is a list of your publications." :"Select furniture from the catalog to view details."}</p>
            </div>
        </div>
        <div class="row space-top">
            ${furtniture.map(item => createFurnitureItem(item))}
        </div>
    `;

    ctx.utils.render(indexView(), divContainer)
}

let createFurnitureItem = (item) => context.utils.html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
        <div class="card-body">
                <img src="${item.img}" />
                <p>Description here</p>
                <footer>
                    <p>Price: <span>${item.price} $</span></p>
                </footer>
                <div>
                    <a href="/data/catalog/${item._id}" class="btn btn-info">Details</a>
                </div>
        </div>
        </div>
    </div>
`
