import { getAllCounsellingRequests } from "../../data/counselling.js";

// گرفتن اطلاعات درخواست‌ها
const requests = getAllCounsellingRequests();

// المنت والد برای قرار دادن اطلاعات
const container = document.querySelector(".admin-counselling-container-js");

// عنوان صفحه و بخش بالا
const header = document.createElement("div");
header.innerHTML = `
  <h1 class="text-3xl font-bold text-yellow-400 mb-6 text-center">مدیریت درخواست‌های مشاوره</h1>
`;
container.appendChild(header);

// اگر هیچ درخواستی نبود
if (requests.length === 0) {
  const empty = document.createElement("p");
  empty.className = "text-center text-gray-400";
  empty.textContent = "هیچ درخواست مشاوره‌ای ثبت نشده است.";
  container.appendChild(empty);
} else {
  // ساخت جدول
  const table = document.createElement("table");
  table.className = "w-full text-sm text-center border border-gray-700 table-auto";
  table.innerHTML = `
    <thead class="bg-gray-800 text-yellow-300">
      <tr>
        <th class="p-2 border border-gray-700">شناسه</th>
        <th class="p-2 border border-gray-700">نام</th>
        <th class="p-2 border border-gray-700">شماره تماس</th>
        <th class="p-2 border border-gray-700">ایمیل</th>
        <th class="p-2 border border-gray-700">محصول</th>
        <th class="p-2 border border-gray-700">بودجه</th>
        <th class="p-2 border border-gray-700">توضیحات</th>
        <th class="p-2 border border-gray-700">تاریخ</th>
      </tr>
    </thead>
    <tbody class="counselling-table-body"></tbody>
  `;
  container.appendChild(table);

  const tbody = table.querySelector(".counselling-table-body");

  requests.forEach(req => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="p-2 border border-gray-700 text-yellow-300">${req.id}</td>
      <td class="p-2 border border-gray-700">${req.name}</td>
      <td class="p-2 border border-gray-700">${req.phone}</td>
      <td class="p-2 border border-gray-700">${req.email || "-"}</td>
      <td class="p-2 border border-gray-700">${req.productType}</td>
      <td class="p-2 border border-gray-700">${parseInt(req.budget).toLocaleString("fa-IR")} تومان</td>
      <td class="p-2 border border-gray-700 text-right">${req.description}</td>
      <td class="p-2 border border-gray-700 text-xs">${new Date(req.date).toLocaleDateString("fa-IR")}</td>
    `;
    tbody.appendChild(row);
  });
}
