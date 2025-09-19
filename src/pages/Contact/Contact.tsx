import "./Contact.scss";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";

const NAME = "МАКСИМ МАЗУРКЕВИЧ";
const TITLE = "Професійний сімейний та весільний фотограф";

const PHONE_DISPLAY = "+380 (67) 123-45-67";
const PHONE_TEL = "+380671234567";

const LINKS = {
  whatsapp: `https://wa.me/${PHONE_TEL}`,
  instagram: "https://instagram.com/your_nickname",
  telegram: "https://t.me/your_nickname",
  facebook: "https://facebook.com/your_page",
  email: "mailto:hello@fotomax.ua",
};


const portrait = "public/img/c470272f-7d82-48f8-842c-8ee50b54d781.png";

export default function Contact() {
  return (
    <div className="contact-page">
      {portrait ? (
        <section className="contact-hero">
          <div className="section-inner">
            <div className="portrait-wrap">
              <img
                className="portrait"
                src={portrait}
                alt="Fotomax portrait"
                loading="lazy"
              />
              <span className="portrait-glow" aria-hidden />
            </div>
          </div>
        </section>
      ) : null}

      <section className="contact-main">
        <div className="section-inner narrow">
          <div className="heading">
            <div className="eyebrow">{NAME}</div>
            <h1 className="page-title">{TITLE}</h1>

            <a className="phone" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
          </div>

          <div className="cta-list">
            <a
              className="cta-btn"
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon fontSize="small" />
              Написати в WhatsApp
            </a>

            <a
              className="cta-btn"
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon fontSize="small" />
              Написати в Instagram
            </a>

            <a
              className="cta-btn"
              href={LINKS.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon fontSize="small" />
              Написати в Telegram
            </a>

            <a
              className="cta-btn"
              href={LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon fontSize="small" />
              Написати у Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
