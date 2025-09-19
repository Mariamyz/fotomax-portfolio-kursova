import React from "react";
import "./Home.scss";


const HERO = {
  title: "ФОТОГРАФ ВАШИХ ПОДІЙ",
  subtitle:
    "Знімаю весілля та сімейні фотосесії в Україні та по всьому світу. Емоції, стиль і світло — без постановки та зайвого шуму.",
  
  bg: "/img/home/hero-bg.jpg", 
};

const INTRO = {
  title: "Максим Мазуркевич — професійний весільний та сімейний фотограф",
  text: `Вітаю на моєму сайті! Тут ви знайдете портфоліо, вартість послуг
та відповіді на часті запитання. Я працюю з 2017 року, знімаю по всьому
світу, люблю живі емоції та природне світло.`,
  photoLeft: "/img/4b8386ca-14a8-45c2-b71f-f27c52f3b94a.png",
  photoRight: "/img/ea6e4e4a-13df-427b-8a73-cb9b0380858f.png",
};

const REEL = {
  src: "/video/8776123-uhd_3840_2160_25fps.mp4",
  poster: "/img/home/reel-poster.jpg",
};


const REEL_2 = {
  src: "public/video/14383264_3840_2160_25fps.mp4", 
  poster: "/img/home/reel-2-poster.jpg",
};

type CSSVarStyle = React.CSSProperties & { ["--hero-bg"]?: string };


const heroStyle: CSSVarStyle = HERO.bg ? { ["--hero-bg"]: `url(${HERO.bg})` } : {};

export default function Home(): JSX.Element {
  return (
    <div className="home-page">
      {/* HERO  */}
      <section className="home-hero" style={heroStyle}>
        <div className="container hero-inner">
          <h1 className="hero-title">{HERO.title}</h1>
          <p className="hero-sub">{HERO.subtitle}</p>
          <div className="scroll-hint" aria-hidden>
            ↓
          </div>
        </div>
      </section>

      <section className="home-reel">
        <div className="reel-wrap">
          <video
            className="reel"
            src={REEL.src}
            poster={REEL.poster}
            muted
            loop
            autoPlay
            playsInline
          />
          <div className="reel-glow" aria-hidden />
        </div>
      </section>

      <section className="home-intro">
        <div className="section-inner intro-grid">
          <div className="intro-copy">
            <div className="eyebrow">{INTRO.eyebrow}</div>
            <h2 className="intro-title">{INTRO.title}</h2>
            <p className="intro-text">{INTRO.text}</p>
          </div>

          <div className="intro-photos">
            <div className="photo-card tall">
              <img src={INTRO.photoLeft} alt="Behind the scenes" loading="lazy" />
            </div>
            <div className="photo-card">
              <img src={INTRO.photoRight} alt="Portrait" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="home-reel secondary">
        <div className="reel-wrap">
          <video
            className="reel"
            src={REEL_2.src}
            poster={REEL_2.poster}
            muted
            loop
            autoPlay
            playsInline
          />
          <div className="reel-glow" aria-hidden />
        </div>
      </section>
    </div>
  );
}
