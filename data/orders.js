export let orders = [
    {
        orderId: 'ORD-0001',
        userId: 'USR-123',
        items: [
          {
            productId: 'PRD-CAP-001',
            name: 'کلاه کپ مشکی',
            quantity: 2,
            unitPrice: 150000
          },
          {
            productId: 'PRD-TSHIRT-003',
            name: 'تیشرت سفید طرح دار',
            quantity: 1,
            unitPrice: 180000
          }
        ],
        totalAmount: 480000,
        shippingCost: 30000,
        discountCode: 'TAKHFIF20',
        address: 'تهران، خیابان آزادی، پلاک ۱۲۳',
        phone: '09123456789',
        email: 'user@email.com',
        status: 'در حال پردازش',
        createdAt: '2025-05-19T12:34:00Z',
        trackingCode: 'TRK-8794'
      }
      
]