$().ready(() => {
    console.log("jquery is ready!");

    $("#refresh").on("click", () => {
        getAllProducts();
    });

    getAllProducts();
});

const getAllProducts = () => {
    $.getJSON("http://localhost:21959/api/products")
        .done(
            res => {
                display(res);
            }
        )
        .fail(
            err =>  {
                console.error(err);
            }
        );
}

const display = (products) => {
    let tbody = $("#data");
    tbody.empty();
    for(let product of products) {
        let tr = $("<tr></tr>");
        let tdId = $(`<td>${product.id}</td>`);
        tr.append(tdId);
        tr.append( $(`<td>${product.partNbr}</td>`) );
        tr.append( $(`<td>${product.name}</td>`) );
        tr.append( $(`<td>${product.price.toFixed(2)}</td>`) );
        tr.append( $(`<td>${product.unit}</td>`) );
        let tdAction = $("<td></td>");
        tdAction.append( $(`<a class="link-danger" href="product-detail.html?id=${product.id}">Detail | </a>`) );
        tdAction.append( $(`<a class="link-danger" href="product-edit.html?id=${product.id}">Edit</a>`) );
        tr.append(tdAction);
        tbody.append(tr);
    }
}


// $().ready(() => {
//     console.log("jquery is ready!");

//     $("#refresh").on("click", () => {
//         getAllProducts();
//     });
    
//     getAllProducts();
// }); // function() {} -- this does the same thing

// const getAllProducts = () => {
//     $.getJSON("http://localhost:21959/api/products")
//         .done(
//             res => {
//                 display(res);
//             }
//         )
//         .fail(
//             err => {
//                 console.error(err)
//             }
//         );
// }

// const display = (products) => {
//     let tbody = $("#data");
//     tbody.empty();
//     for(let product of products){
//         let tr = $("<tr></tr>");
//         let tdId = $(`<td>${product.id}</td>`);
//         tr.append(tdId);
//         tr.append( $(`<td>${product.partNbr}</td>`)); // another way of doing the previous append
//         tr.append( $(`<td>${product.name}</td>`));
//         tr.append( $(`<td${product.price}</td`));
//         tr.append( $(`<td>${product.unit}</td>`));
//         tbody.append(tr);
//     }
// }

// let fn = () => { console.log("function")}