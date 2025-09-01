import {addToCart, cart} from '../data/carts.js';
import {products} from '../data/products.js';

let productHTML = "";

/*products.forEach(product => {
    productHTML +=
    `<div class="relative bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-yellow-400 transition">
    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded mb-4" />
    <h2 class="text-xl font-semibold mb-2 text-white">${product.name}</h2>

    <p class="text-gray-400 text-sm mb-2">قابل چاپ با طرح دلخواه</p>
    <p class="text-yellow-400 font-bold"><s>${product.price}</s> تومان</p>

    <button class="mt-3 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition
    addToCart-js 
    data-product-id = "${product.id}"">افزودن به سبد خرید</button>
    </div>`
});*/
products.forEach(product => {
    let actualPriceHTML = "";

    // بررسی وجود تخفیف
    if (product.discount !== null) {
        const discountedPrice = product.price - (product.price * product.discount / 100);
        actualPriceHTML = `<s>${product.price} تومان</s> <span class="text-green-400 font-bold">${discountedPrice} تومان</span>`;
    }
    else {
        actualPriceHTML=`${product.price} تومان</s>`;
    }

    productHTML +=
    `<div class="relative bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-yellow-400 transition">
    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded mb-4" />
    <h2 class="text-xl font-semibold mb-2 text-white">${product.name}</h2>

    <p class="text-gray-400 text-sm mb-2">قابل چاپ با طرح دلخواه</p>
    <p class="text-yellow-400 font-bold">
      ${actualPriceHTML}
    </p>

    <button class="mt-3 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition 
    addToCart-js  
    data-product-id="${product.id}">افزودن به سبد خرید</button>
    </div>`;
});

document.querySelector('.products-js').innerHTML = productHTML;

document.querySelectorAll('.addToCart-js').
    forEach((button) => {
        button.addEventListener('click',
            () => {
                const id = button.dataset.productId;

                addToCart(id);
                updateCartQuentity();
            }
        )
    })