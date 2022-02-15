import "./App.css";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./Pages/Auth";

import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";
import Menus from "./Pages/menus";
import Meals from "./Pages/meals";
import AboutUs from "./Pages/about";
import Payments from "./Pages/payments";

import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminMenus from "./Pages/Admin/menus";
import AdminSubscribers from "./Pages/Admin/subscribers";
import AdminMeals from "./Pages/Admin/meals";
import AdminPayments from "./Pages/Admin/payments";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/menus" element={<Menus />} />
          <Route path="/meals" element={<Meals />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/about" element={<AboutUs />} />
          
          <Route path="/admin/menus" element={<AdminMenus />} />
          <Route path="/admin/subscribers" element={<AdminSubscribers />} />
          <Route path="/admin/meals" element={<AdminMeals />} />
          <Route path="/admin/payments" element={<AdminPayments />} />
          <Route path="/logout" element={<AdminPayments />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
