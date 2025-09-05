import { products } from "../../data/products.js";

// Load from localStorage if exists
let savedProducts = JSON.parse(localStorage.getItem("products")) || products.slice();

function saveProducts() {
  localStorage.setItem("products", JSON.stringify(savedProducts));
}

const container = document.querySelector(".admin-products-container-js");

// عنوان و دکمه اضافه
const header = document.createElement("div");
header.innerHTML = `
  <h1 class="text-3xl font-bold text-yellow-400 mb-6 text-center">مدیریت محصولات</h1>
  <button class="bg-yellow-400 text-black font-bold py-2 px-4 rounded hover:bg-yellow-300 transition mb-6 block mx-auto add-product-btn">
    افزودن محصول جدید
  </button>
`;
container.appendChild(header);

// جدول
const table = document.createElement("table");
table.className = "w-full text-sm text-center table-auto border border-gray-600";
table.innerHTML = `
  <thead class="bg-gray-800 text-yellow-300">
    <tr>
      <th class="p-2 border border-gray-600">تصویر</th>
      <th class="p-2 border border-gray-600">نام</th>
      <th class="p-2 border border-gray-600">قیمت</th>
      <th class="p-2 border border-gray-600">موجودی</th>
      <th class="p-2 border border-gray-600">عملیات</th>
    </tr>
  </thead>
  <tbody class="products-table-body"></tbody>
`;
container.appendChild(table);

const tbody = table.querySelector(".products-table-body");

function renderTable() {
  tbody.innerHTML = "";
  savedProducts.forEach((p, i) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="p-2 border border-gray-700"><img src="${p.image}" class="w-12 h-12 object-cover rounded"/></td>
      <td class="p-2 border border-gray-700">${p.name}</td>
      <td class="p-2 border border-gray-700">${parseInt(p.price).toLocaleString("fa-IR")} تومان</td>
      <td class="p-2 border border-gray-700">${p.availableSizes?.length || '-'}</td>
      <td class="p-2 border border-gray-700">
        <button data-id="${p.productId}" class="text-red-400 hover:text-red-600 delete-btn">حذف</button>
      </td>
    `;
    tbody.appendChild(row);
  });

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      savedProducts = savedProducts.filter(p => p.productId !== id);
      saveProducts();
      renderTable();
    });
  });
}

renderTable();

document.querySelector(".add-product-btn").addEventListener("click", () => {
  const form = document.createElement("div");
  form.className = "bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto mt-6 space-y-4";
  form.innerHTML = `
    <h2 class="text-xl text-yellow-400 font-bold mb-4 text-center">افزودن محصول جدید</h2>
    <input type="text" placeholder="نام محصول" class="form-name w-full bg-black text-white border border-yellow-400 rounded px-3 py-2" />
    <input type="text" placeholder="قیمت (تومان)" class="form-price w-full bg-black text-white border border-yellow-400 rounded px-3 py-2" />
    <input type="text" placeholder="لینک تصویر" class="form-image w-full bg-black text-white border border-yellow-400 rounded px-3 py-2" />
    <button class="save-product w-full bg-yellow-400 text-black font-bold py-2 rounded hover:bg-yellow-300">ذخیره محصول</button>
  `;

  container.appendChild(form);

  form.querySelector(".save-product").addEventListener("click", () => {
    const name = form.querySelector(".form-name").value.trim();
    const price = form.querySelector(".form-price").value.trim();
    const image = form.querySelector(".form-image").value.trim();

    if (!name || !price || !image) {
      alert("تمام فیلدها الزامی هستند");
      return;
    }

    const newProduct = {
      productId: `PRD-${Date.now()}`,
      name,
      image,
      material: '',
      printType: '',
      price,
      rating: { stars: 0, count: 0 },
      discount: null,
      availableColors: [],
      defaultColor: '',
      availableSizes: [],
      defaultSize: ''
    };

    savedProducts.push(newProduct);
    saveProducts();
    renderTable();
    form.remove();
  });
});
