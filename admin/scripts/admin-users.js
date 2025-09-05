import { users, deleteUserById } from "../../data/users.js";

const container = document.querySelector(".admin-users-js");

// ایجاد عنوان
const title = document.createElement("h2");
title.className = "text-3xl font-bold text-yellow-400 mb-6 text-center";
title.textContent = "مدیریت کاربران";
container.appendChild(title);

// ساخت جدول
const tableWrapper = document.createElement("div");
tableWrapper.className = "overflow-x-auto bg-gray-800 rounded-lg shadow-md";

const table = document.createElement("table");
table.className = "min-w-full text-sm text-center";

// هدر جدول
table.innerHTML = 
  `<thead class="bg-gray-700 text-yellow-300 text-sm">
    <tr>
      <th class="py-3 px-4 border-b border-gray-600">شناسه</th>
      <th class="py-3 px-4 border-b border-gray-600">نام</th>
      <th class="py-3 px-4 border-b border-gray-600">ایمیل</th>
      <th class="py-3 px-4 border-b border-gray-600">شماره تماس</th>
      <th class="py-3 px-4 border-b border-gray-600">آدرس</th>
      <th class="py-3 px-4 border-b border-gray-600">عملیات</th>
    </tr>
  </thead>
  <tbody class="js-users-table">
  </tbody>`
;

tableWrapper.appendChild(table);
container.appendChild(tableWrapper);

// بدنه جدول
const tbody = table.querySelector(".js-users-table");

users.forEach(user => {
  const tr = document.createElement("tr");
  tr.className = "text-white border-b border-gray-700";

  tr.innerHTML = 
    `<td class="py-2 px-4">${user.userId || '---'}</td>
    <td class="py-2 px-4">${user.name || '---'}</td>
    <td class="py-2 px-4">${user.userEmail || '---'}</td>
    <td class="py-2 px-4">${user.phoneNumber || '---'}</td>
    <td class="py-2 px-4">${user.addresses?.[0] || '---'}</td>
    <td class="py-2 px-4">
      <button class="delete-btn bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm" data-userid="${user.userId}">
        حذف
      </button>
    </td>
  `;

  tbody.appendChild(tr);
});

// حذف کاربر
tbody.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    const userId = e.target.dataset.userid;
    const confirmed = confirm("آیا از حذف این کاربر مطمئن هستید؟");

    if (confirmed && userId) {
      const success = deleteUserById(userId);
      if (success) {
        e.target.closest("tr").remove();
        alert("کاربر با موفقیت حذف شد.");
      } else {
        alert("خطا در حذف کاربر.");
      }
    }
  }
});
