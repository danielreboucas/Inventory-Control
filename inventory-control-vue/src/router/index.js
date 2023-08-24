import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "./../views/Dashboard/Dashboard.vue";
import Category from "./../views/Category/Category.vue";
import Product from "./../views/Product/Product.vue";
import Client from "./../views/Client/Client.vue";
import Supplier from "./../views/Supplier/Supplier.vue";
import Settings from "./../views/Settings/Settings.vue";
import AddProduct from "./../views/Product/AddProduct.vue";
import ListProduct from "./../views/Product/ListProduct.vue";
import EditProduct from "./../views/Product/EditProduct.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/dashboard", component: Dashboard },
    { path: "/category", component: Category },
    {
      path: "/product",
      component: Product,
      children: [
        { path: "", component: ListProduct },
        { path: "add", component: AddProduct, props: true },
        { path: "edit/:index", component: EditProduct, props: true },
      ],
    },
    { path: "/client", component: Client },
    { path: "/supplier", component: Supplier },
    { path: "/settings", component: Settings },
  ],
});

export default router;
