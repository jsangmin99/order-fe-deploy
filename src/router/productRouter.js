import ProductList from "@/views/product/ProductList";
import ProductListManage from "@/views/product/ProductListManage";

export const productRouter = [
    {
        path: '/',
        name: 'Home',
        component: ProductList
    },
    {
        path: '/product/list/',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/product/manage',
        name: 'ProductListManage',
        component: ProductListManage
    }




];