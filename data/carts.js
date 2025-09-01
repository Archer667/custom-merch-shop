export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [{
      userId : '',
      items : [{
        productId: "PRD-TSHIRT-001",  // شناسه محصول
        name: "تیشرت سفید",           // نام محصول
        image: "/images/tshirt.jpg",  // مسیر تصویر
        quantity: 2,                  // تعداد انتخابی
        price: 250000,                // قیمت واحد (به تومان)
        size: "متوسط",                // سایز محصول (اگر لازم باشد)
        color: "سفید",                // رنگ انتخابی
        material: "کتان",             // جنس محصول
        printType: "چاپ دیجیتال",     // نوع چاپ
        customText: "برای تولد آرش",  // متن دلخواه مشتری
        uploadedFile: "logo123.png"    // فایلی که مشتری آپلود کرده
      }]
      discountCode : 'THAKHFIF-01',                 // کد تخفیف وارد شده
      discountAmount : '',               // میزان تخفیف محاسبه شده
      shippingcost : '',                 //هزینه ارسال
      totalPrice : '',                   // مجموع قابل پرداخت
      date : '',                         //تاریخ ساخت سبد خرید
      status : 'باز'                        //وضعیت
    }]
}

export function addToCart(id){
    let machingcart
  
        cart.forEach((cartItem) => {
            if(cartItem.id === id){
            machingcart = cartItem ;
            }
        })

        if (machingcart){
            machingcart.quentity++;
        }else{
            cart.push({
            productId : productId,
            quentity : 1
            })
        }
    saveToStorage()
  }

export function removeFromId(id){
    const newCart = [];

    cart.forEach((cartItem) => {
      if (cartItem.id !== id){
        newCart.push(cartItem);
      }
    })

    cart = newCart;

    saveToStorage()
  } 