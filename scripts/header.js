const logo = '../images/mana-single.jpeg';

export const header = `
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="../style/output.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">

<div class="max-w-7xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4 " dir="rtl">

  <div class="flex items-center">
    <img src="${logo}" alt="لوگو" class="h-10 w-auto" />
  </div>

  <div class="flex flex-1 justify-center items-center gap-6">
    
    <a href="home.html" class="text-white hover:text-yellow-400 transition duration-200 font-semibold">صفحه اصلی</a>
    <a href="products.html" class="text-white hover:text-yellow-400 transition duration-200 font-semibold">محصولات ما</a>
    <a href="counseling.html" class="text-white hover:text-yellow-400 transition duration-200 font-semibold">مشاوره رایگان</a>
    <a href="track-orders.html" class="text-white hover:text-yellow-400 transition duration-200 font-semibold">پیگیری سفارشات</a>
    <a href="contact-with-us.html" class="text-white hover:text-yellow-400 transition duration-200 font-semibold">تماس با ما</a>
  
    <div class="relative w-48 md:w-64">
      <input 
        type="text" 
        placeholder="جست‌وجو..." 
        class="w-full pl-10 pr-4 py-2 bg-gray-900 text-white border border-yellow-400 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400" 
      />
      <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none text-yellow-400">
        <i class="material-icons">search</i>
      </div>
    </div>         
  </div>

  <div class="flex items-center space-x-4 space-x-reverse">
    <a href="#" class="text-yellow-400 hover:text-yellow-300 text-xl"><i class="material-icons">account_circle</i></a>
    <a href="#" class="text-yellow-400 hover:text-yellow-300 text-xl"><i class="material-icons">shopping_cart</i></a>
  </div>

</div>
`

document.querySelector('.header-js').innerHTML = header ;



