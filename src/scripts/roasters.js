const makeSizeList = sizes => {
    const insertSizes = document.querySelector("#listSizes");
    let HTMLsquirt = `<option id="0">select a size:</option>
    `;
    sizes.forEach(element => {
        HTMLsquirt += `<option id="${element.id}">${element.size}</option>
        `;
    });
    insertSizes.innerHTML = HTMLsquirt;
};

const makeProductList = products => {
    const insertProducts = document.querySelector("#listProducts");
    let HTMLsquirt = `<option id="0">select a product:</option>
    `;
    products.forEach(element => {
        HTMLsquirt += `<option id="${element.id}">${element.name}</option>
        `;
    });
    insertProducts.innerHTML = HTMLsquirt;
};

export { makeSizeList, makeProductList };