import { orders } from "../../data/orders.js";

const container = document.querySelector(".admin-orders-container-js");

container.innerHTML = `
  <h1 class="text-3xl font-bold text-yellow-400 mb-6 text-center">مدیریت سفارشات</h1>
  <div class="overflow-x-auto">
    <table class="w-full text-sm border border-gray-700 text-center table-auto">
      <thead class="bg-gray-800 text-yellow-300">
        <tr>
          <th class="p-2 border border-gray-600">کد سفارش</th>
          <th class="p-2 border border-gray-600">کاربر</th>
          <th class="p-2 border border-gray-600">شماره تماس</th>
          <th class="p-2 border border-gray-600">مبلغ کل</th>
          <th class="p-2 border border-gray-600">وضعیت</th>
          <th class="p-2 border border-gray-600">عملیات</th>
        </tr>
      </thead>
      <tbody class="orders-table-body bg-gray-900">
        <!-- محتوای جدول اینجا پر می‌شود -->
      </tbody>
    </table>
  </div>
`;

const tbody = container.querySelector(".orders-table-body");

function renderOrders() {
  tbody.innerHTML = "";

  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-gray-400 py-4">هیچ سفارشی ثبت نشده است.</td></tr>`;
    return;
  }

  orders.forEach((order, index) => {
    const row = document.createElement("tr");
    row.className = "border border-gray-700";

    row.innerHTML = `
      <td class="p-2 border border-gray-700">${order.orderId}</td>
      <td class="p-2 border border-gray-700">${order.email || "بدون ایمیل"}</td>
      <td class="p-2 border border-gray-700">${order.phone || "-"}</td>
      <td class="p-2 border border-gray-700">${(order.totalAmount + order.shippingCost).toLocaleString("fa-IR")} تومان</td>
      <td class="p-2 border border-gray-700">
        <select class="status-dropdown p-1 rounded bg-black text-white border border-yellow-400" data-index="${index}">
          <option value="در حال پردازش" ${order.status === "در حال پردازش" ? "selected" : ""}>در حال پردازش</option>
          <option value="ارسال شده" ${order.status === "ارسال شده" ? "selected" : ""}>ارسال شده</option>
          <option value="تحویل داده شده" ${order.status === "تحویل داده شده" ? "selected" : ""}>تحویل داده شده</option>
          <option value="لغو شده" ${order.status === "لغو شده" ? "selected" : ""}>لغو شده</option>
        </select>
      </td>
      <td class="p-2 border border-gray-700">
        <button class="text-red-400 hover:text-red-600 delete-order-btn" data-id="${order.orderId}">حذف</button>
      </td>
    `;

    tbody.appendChild(row);
  });

  // حذف سفارش
  document.querySelectorAll(".delete-order-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const idx = orders.findIndex(o => o.orderId === id);
      if (idx !== -1) {
        orders.splice(idx, 1);
        localStorage.setItem("orders", JSON.stringify(orders));
        renderOrders();
      }
    });
  });

  // تغییر وضعیت سفارش
  document.querySelectorAll(".status-dropdown").forEach(drop => {
    drop.addEventListener("change", e => {
      const index = parseInt(e.target.dataset.index);
      orders[index].status = e.target.value;
      localStorage.setItem("orders", JSON.stringify(orders));
    });
  });
}

renderOrders();
