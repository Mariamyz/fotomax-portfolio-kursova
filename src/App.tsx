import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { StyledEngineProvider, ThemeProvider, CssBaseline, Container } from "@mui/material";
import theme from "./theme/muiTheme";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Pricing from "./pages/Pricing/Pricing";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Project/Project";
import Login from "./components/Login/Login";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import { ContentProvider } from "./content/ContentContext";

import ContactFab from "./components/ContactFab/ContactFab";

function PrivateRoute({ children }: { children: JSX.Element }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/admin/login" replace />;
}

function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
function AuthLayout(){ return <Outlet/>; }

export default function App(){
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ContentProvider>
          <Routes>
            <Route element={<SiteLayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/portfolio" element={<Portfolio/>}/>
              <Route path="/pricing" element={<Pricing/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/projects/:slug" element={<Project/>}/>
            </Route>

            <Route element={<AuthLayout/>}>
              <Route path="/admin/login" element={<Login/>}/>
              <Route path="/admin/forgot-password" element={<ForgotPassword/>}/>
            </Route>

            <Route element={<SiteLayout/>}>
              <Route path="/admin" element={<PrivateRoute><AdminDashboard/></PrivateRoute>} />
            </Route>

            <Route path="*" element={<div className="container"><h1>Page not found</h1></div>} />
          </Routes>

          <ContactFab
            label="Foto Max"
            phone="+380671234567"
            whatsapp="+380671234567"
            telegram="max_photo"
            instagram="foto_max"
            facebook="foto.max"
            avatarSrc="https://loop.com.ua/image/cache/catalog/category/delovaya-fotosessiya780-min-780x780.jpg"
            fabSize={104} 
          />
        </ContentProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
