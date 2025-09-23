
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import ContactFab from "./components/ContactFab/ContactFab";

import Login from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";


import NotFound from "./pages/NotFound/NotFound"; 

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* публічні сторінки */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />

        {/* АВТОРИЗАЦІЯ */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/forgot-password" element={<ForgotPassword />} />

        {/* ПРИВАТНА АДМІНКА */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      <ContactFab
        label="Foto Max"
        // варіант 1 (з public): avatarSrc="/img/9f98f76b-fe61-4a97-847b-c60c6796fb72.png"
        // варіант 2 (імпорт): 
        // import avatar from "/img/9f98f76b-fe61-4a97-847b-c60c6796fb72.png";
        // avatarSrc={avatar}
        avatarSrc="/img/9f98f76b-fe61-4a97-847b-c60c6796fb72.png"
        phone="+380671112233"
        whatsapp="+380671112233"
        telegram="@fotomax"
        instagram="fotomax"
        facebook="fotomax.page"
        fabSize={96}
      />

      <Footer />
    </>
  );
}

