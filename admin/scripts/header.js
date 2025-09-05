const logo = "../../images/mana-single.jpeg";

export const header = 
`<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="../../style/output.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<div class="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4" dir="rtl">

  <div class="flex items-center">
    <img src="${logo}" alt="لوگو" class="h-10 w-auto" />
  </div>

  <div class="flex flex-1 justify-center items-center gap-6">
    <a href="admin-users.html" class="text-white hover:text-yellow-400 transition font-semibold">مدیریت کاربران</a>
    <a href="admin-products.html" class="text-white hover:text-yellow-400 transition font-semibold">مدیریت محصولات</a>
    <a href="admin-orders.html" class="text-white hover:text-yellow-400 transition font-semibold">مدیریت سفارشات</a>
    <a href="admin-counselling.html" class="text-white hover:text-yellow-400 transition font-semibold">مدیریت مشاوره ها</a>
    </div>

  <div class="flex items-center space-x-4 space-x-reverse">
    <a href="../../html-pages/log-in.html" class="text-yellow-400 hover:text-yellow-300 text-xl">
      <i class="material-icons">account_circle</i>
    </a>
  </div>
`
;

document.querySelector(".header-js").innerHTML = header;