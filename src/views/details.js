import { deleteItem, getDetails } from "../requests.js";

let context;
export async function showDetails(ctx) {
    context = ctx;
    let id = ctx.params.id
    let itemDetails = await getDetails(id);
    ctx.utils.render(detailsView(itemDetails), ctx.divContainer)
    document.querySelector(".btn-red").addEventListener("click", (event) => deleteItemFunction(event, ctx))
};

let detailsView = (item) => context.utils.html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
        </div>
        <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="../.${item.img}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${item.make}</span></p>
            <p>Model: <span>${item.model}</span></p>
            <p>Year: <span>${item.year}</span></p>
            <p>Description: <span>${item.description}</span></p>
            <p>Price: <span>${item.price}</span></p>
            <p>Material: <span>${item.material}</span></p>
            <div>
                <a href="" class="btn btn-info">Edit</a>
                <a href=""  class="btn btn-red">Delete</a>
            </div>
        </div>
    </div>
`;

async function deleteItemFunction(event,ctx) {
    event.preventDefault()
    await deleteItem(ctx.params.id)
    context.utils.page('/')
}