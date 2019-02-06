import { getOrders,
    getProducts,
    getSizes,
    createOrder } from "./DataManager.js";
import { makeSizeList, makeProductList } from "./roasters.js";

let sizes = []

getSizes().then(
    (arrayOfSizes) => {
        // 100% sure we have sizes
        sizes = arrayOfSizes
        makeSizeList(sizes);
    }
).then(
    () => {
         return getProducts()
    }
)
.then(
    (productArray) => {
        makeProductList(productArray);
    }
)

