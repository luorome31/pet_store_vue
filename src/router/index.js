import { createWebHistory, createRouter } from "vue-router";
const routes = [
    // 商品展示模块相关路由
    {
        path: "/",
        name: "Index",
        component: () => import("@/view/Home.vue")
    },
    {
        path:"/main",
        name:"Main",
        component: () => import("@/view/purchase/Main.vue")
    },
    {
        path:"/products/:id",
        name:"Products",
        component: () => import("@/view/purchase/Products.vue")
    },
    {
        path:"/items/:id",
        name:"Items",
        component: () => import("@/view/purchase/Items.vue")
    },
    {
        path:"/search",
        name:"Search",
        component: () => import("@/view/purchase/Search.vue")
    },
    {
        path:"/item_info/:id",
        name:"ItemInfo",
        component: () => import("@/view/purchase/ItemDetail.vue")
    },

    // 用户模块相关路由
    {
        path:"/login",
        name:"Login",
        component: () => import("@/view/user/Login.vue")
    },
    {
        path:"/register",
        name:"Register",
        component: () => import("@/view/user/Register.vue")
    },
    {
        path:"/userEdit",
        name:"UserEdit",
        component: () => import("@/view/user/UserEdit.vue")
    },

    //订单相关模块路由
    {
        path:"/cart",
        name:"Cart",
        component: () => import("@/view/order/Cart.vue")
    },
    {
        path:"/orderList",
        name:"OrderList",
        component: () => import("@/view/order/OrderList.vue")
    },
    {
        path:"/orderDetail",
        name:"OrderDetail",
        component: () => import("@/view/order/OrderDetail.vue")
    },
    {
        path:"/orderConfirm",
        name:"OrderConfirm",
        component: () => import("@/view/order/OrderConfirm.vue")
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;