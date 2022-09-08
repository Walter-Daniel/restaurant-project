import { Route, Routes } from "react-router-dom";
import { CartPage, EmpanadasPage, Home, PizzasPage, SandwichesPage } from "../pages";

import { Login } from "../../auth/pages/Login";
import { Register } from "../../auth/pages/Register";

import {AdminRoutes, AppRouter} from "../../router";
import { Users } from "../../admin/Users";
import { Products } from "../../admin/products/Products";
import { OrderPage } from "../../admin/Order/OrderPage";



export const ProductsRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" exact element={<AppRouter><Home /></AppRouter>} />
            <Route path="sandwiches" element={<AppRouter><SandwichesPage /></AppRouter>} />
            <Route path="empanadas" element={<AppRouter><EmpanadasPage /></AppRouter>} />
            <Route path="pizza" element={<AppRouter><PizzasPage /></AppRouter>} />
            <Route path="carrito" element={<AppRouter><CartPage /></AppRouter>} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            
            <Route path="users" element={<AdminRoutes><Users /></AdminRoutes>} />
            <Route path="products" element={<AdminRoutes><Products /></AdminRoutes>} />
            <Route path="orders" element={<AdminRoutes><OrderPage /></AdminRoutes>} />
       </Routes>
     
    </>
  )
}
