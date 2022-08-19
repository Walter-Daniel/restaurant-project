import { Route, Routes } from "react-router-dom";
import { EmpanadasPage, Home, PizzasPage, Product, SandwichesPage, SearchPage } from "../pages";

import { Login } from "../../auth/pages/Login";
import { Register } from "../../auth/pages/Register";
import {AdminRoutes, AppRouter} from "../../router";
import { Users } from "../../admin/Users";



export const ProductsRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/*" exact element={<AppRouter><Home /></AppRouter>} />
            <Route path="sandwiches" element={<AppRouter><SandwichesPage /></AppRouter>} />
            <Route path="empanadas" element={<AppRouter><EmpanadasPage /></AppRouter>} />
            <Route path="pizza" element={<AppRouter><PizzasPage /></AppRouter>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            
            <Route path="users" element={<AdminRoutes><Users /></AdminRoutes>} />
       </Routes>
    </>
  )
}
