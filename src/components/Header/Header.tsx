
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import "./Header.scss";

export default function Header() {
  const location = useLocation();

  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    "nav-link" + (isActive ? " active" : "");

  useEffect(() => setOpen(false), [location.pathname]);


  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, []);


  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    return () => document.body.classList.remove("no-scroll");
  }, [open]);

  const closeMobile = useCallback(() => setOpen(false), []);

  return (
    <header className={`site-header ${compact ? "is-compact" : "is-top"}`} role="banner">
     
      <div className="bars">
       
        <div className="bar primary-bar">
          <div className="brand-wrap">
            <NavLink to="/" className="brand" onClick={closeMobile}>
              Foto Max
            </NavLink>
          </div>

          <div className="spacer" />

          <nav className="nav-right" aria-label="Primary">
            <NavLink className={navClass} to="/" onClick={closeMobile}>Home</NavLink>
            <NavLink className={navClass} to="/about" onClick={closeMobile}>About me</NavLink>
            <NavLink className={navClass} to="/portfolio" onClick={closeMobile}>Portfolio</NavLink>
            <NavLink className={navClass} to="/pricing" onClick={closeMobile}>Pricing</NavLink>
            <NavLink className={navClass} to="/contact" onClick={closeMobile}>Contact</NavLink>
          </nav>

          <button
            type="button"
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobileMenu"
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>

        <div className="bar compact-bar">
          <nav className="nav-center" aria-label="Compact">
            <NavLink className={navClass} to="/" onClick={closeMobile}>Home</NavLink>
            <NavLink className={navClass} to="/about" onClick={closeMobile}>About me</NavLink>
            <NavLink className={navClass} to="/portfolio" onClick={closeMobile}>Portfolio</NavLink>
            <NavLink className={navClass} to="/pricing" onClick={closeMobile}>Pricing</NavLink>
            <NavLink className={navClass} to="/contact" onClick={closeMobile}>Contact</NavLink>
          </nav>

          <button
            type="button"
            className="burger"
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="mobileMenu"
            onClick={() => setOpen(v => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      <div id="mobileMenu" className={`mobile-menu ${open ? "open" : ""}`}>
        <div className="container mobile-inner">
          <NavLink className={navClass} to="/" onClick={closeMobile}>Home</NavLink>
          <NavLink className={navClass} to="/about" onClick={closeMobile}>About me</NavLink>
          <NavLink className={navClass} to="/portfolio" onClick={closeMobile}>Portfolio</NavLink>
          <NavLink className={navClass} to="/pricing" onClick={closeMobile}>Pricing</NavLink>
          <NavLink className={navClass} to="/contact" onClick={closeMobile}>Contact</NavLink>
        </div>
      </div>
    </header>
  );
}

