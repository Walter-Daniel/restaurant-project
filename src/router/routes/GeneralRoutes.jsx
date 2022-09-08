import { Route, Routes } from "react-router-dom";

import { OrderPage } from "../../admin/Order/OrderPage";
import { Products } from "../../admin/products/Products";
import { Users } from "../../admin/Users";

import { Login } from "../../auth/pages/Login";
import { Register } from "../../auth/pages/Register";

import { CartPage, EmpanadasPage, Home, PizzasPage, SandwichesPage } from "../../products/pages";

import { AdminRoutes } from "../AdminRoute";
import { PublicRoute } from "../PublicRoute";

export const GeneralRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" exact element={<PublicRoute><Home /></PublicRoute>} />
            <Route path="sandwiches" element={<PublicRoute><SandwichesPage /></PublicRoute>} />
            <Route path="empanadas" element={<PublicRoute><EmpanadasPage /></PublicRoute>} />
            <Route path="pizza" element={<PublicRoute><PizzasPage /></PublicRoute>} />
            <Route path="carrito" element={<PublicRoute><CartPage /></PublicRoute>} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            
            <Route path="users" element={<AdminRoutes><Users /></AdminRoutes>} />
            <Route path="products" element={<AdminRoutes><Products /></AdminRoutes>} />
            <Route path="orders" element={<AdminRoutes><OrderPage /></AdminRoutes>} />
        </Routes>
 
    </>
  )
}
