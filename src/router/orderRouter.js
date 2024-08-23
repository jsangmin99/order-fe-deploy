

export  const orderRouter = [
    {
        path: '/order/list',
        name: 'OrderList',
        component: () => import('@/views/order/OrderList.vue')
    },
    {
        path: '/order/cart',
        name: 'OrderCart',
        component: () => import('@/views/order/OrderCart.vue')
    }
]
