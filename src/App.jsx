import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import SalePage from "./pages/SalePage";
import VoucherPage from "./pages/VoucherPage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import VoucherDetailPage from "./pages/VoucherDetailPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}>
        <Route index element={<DashboardPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="product/create" element={<CreateProductPage />} />
        <Route path="product/edit/:id" element={<EditProductPage />} />

        <Route path="sale" element={<SalePage />} />
        <Route path="voucher" element={<VoucherPage />} />
        <Route path="voucher/detail/:id" element={<VoucherDetailPage />} />
      </Route> */}
      <Route path="/">
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<DashboardPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="sale" element={<SalePage />} />
          <Route path="voucher" element={<VoucherPage />} />
          <Route path="product/create" element={<CreateProductPage />} />
          <Route path="product/edit/:id" element={<EditProductPage />} />
          <Route path="voucher/detail/id" element={<VoucherDetailPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
