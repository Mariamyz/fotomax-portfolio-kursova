import { FaInstagram, FaFacebookF, FaViber, FaPhoneAlt } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://instagram.com/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://t.me/" target="_blank" rel="noreferrer">
          <FaTelegramPlane />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <FaFacebookF />
        </a>
        <a href="viber://chat?number=%2B380XXXXXXXXX">
          <FaViber />
        </a>
        <a href="tel:+380XXXXXXXXX">
          <FaPhoneAlt />
        </a>
      </div>

      <div className="footer-text">
        <h3>Професійний фотограф</h3>
        <p>Створюю яскраві спогади про найважливіші події вашого життя</p>
        <span>Україна • Світ</span>
      </div>

      <div className="footer-copy">© {new Date().getFullYear()} Foto Max</div>
    </footer>
  );
}
