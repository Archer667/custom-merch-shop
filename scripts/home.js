import {products} from '../data/products.js';
import {topcommnts} from '../data/comments.js';

let productHTML = "";
let commentHTML = "";

products.forEach(product => {
    if(product.discount){
        let actualPriceHTML = "";
        const discountedPrice = product.price - (product.price * product.discount / 100);
        actualPriceHTML = `<s>${product.price} تومان</s> <span class="text-green-400 font-bold">${discountedPrice} تومان</span>`;

        productHTML +=
        `<div class="relative bg-gray-900 p-4 rounded-lg shadow-md hover:shadow-yellow-400 transition">
        <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover rounded mb-4" />
        <h2 class="text-xl font-semibold mb-2 text-white">${product.name}</h2>
    
        <p class="text-gray-400 text-sm mb-2">قابل چاپ با طرح دلخواه</p>
        <p class="text-yellow-400 font-bold">
          ${actualPriceHTML}
        </p>
        </div>`;
    }
});

topcommnts.forEach(comment => {
    commentHTML += `
    <div class="bg-black p-4 rounded-xl border border-yellow-400 text-white"><img src="${comment.img}" alt="${comment.name}" class="w-[20px] h-[20px] rounded-full" /> ${comment.comment} - ${comment.name} </div>  
    `
})

document.querySelector('.js-discountproducts').innerHTML = productHTML;
document.querySelector('.js-comments').innerHTML = commentHTML;
  