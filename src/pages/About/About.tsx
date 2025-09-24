import "./About.scss";
import { useContent } from "../../content/ContentContext";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const { content } = useContent();
  const a = content.about;

  // /* HERO
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const [heroMuted, setHeroMuted] = useState(true);
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const v = heroVideoRef.current;
    if (!v) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.5 },
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const reelRef = useRef<HTMLVideoElement | null>(null);
  const [reelMuted, setReelMuted] = useState(true);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="section-inner">
          <div className="about-hero-grid">
            <div className={`photo-wrap ${heroReady ? "is-ready" : ""}`}>
              <video
                ref={heroVideoRef}
                src="/video/3917703-uhd_2160_4096_25fps.mp4"
                playsInline
                autoPlay
                loop
                muted={heroMuted}
                controls={false}
                preload="auto"
                onCanPlay={() => setHeroReady(true)}
              />
              <button
                type="button"
                className="hero-ctl"
                onClick={() => setHeroMuted((m) => !m)}
                aria-label={heroMuted ? "Unmute video" : "Mute video"}
              >
                {heroMuted ? "🔇" : "🔊"}
              </button>
              <div className="glow" />
            </div>

            <div className="copy">
              <h1
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-easing="ease-out-cubic"
              >
                ABOUT ME
              </h1>

              <span
                className="divider"
                data-aos="zoom-in"
                data-aos-delay="80"
                data-aos-duration="600"
              />

              {a.bio.slice(0, 3).map((p: string, i: number) => (
                <p
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={120 + i * 100}
                  data-aos-duration="700"
                  data-aos-easing="ease-out-cubic"
                >
                  {p}
                </p>
              ))}

              <a
                className="cta"
                href="/contact"
                data-aos="fade-up"
                data-aos-delay={420}
                data-aos-duration="700"
                data-aos-easing="ease-out-cubic"
              >
                Забронювати сеанс <span className="arrow">›</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section
        className="about-awards"
        data-aos="fade-in"
        data-aos-duration="600"
      >
        <div className="section-inner">
          <div className="awards-grid reverse">
            <div
              className="awards-text"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
            >
              <h2 data-aos="fade-up" data-aos-delay="60">
                Awards
              </h2>
              <ul>
                <li data-aos="fade-up" data-aos-delay="120">
                  ТОП-100 весільних фотографів (версія MyWed, 2021)
                </li>
                <li data-aos="fade-up" data-aos-delay="200">
                  Переможець «Кращий репортажний весільний фотограф» (2020)
                </li>
                <li data-aos="fade-up" data-aos-delay="280">
                  #55 місце в міжнародному рейтингу TOP100AWARDS (2022)
                </li>
                <li data-aos="fade-up" data-aos-delay="360">
                  Кращий весільний фотограф у Києві (версія WeddingUA, 2019)
                </li>
              </ul>
            </div>

            <div
              className="awards-photo"
              data-aos="zoom-in"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="https://media.istockphoto.com/id/802955798/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D1%81%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D1%83%D1%94-%D0%BD%D0%B0%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE-%D1%96-%D0%BD%D0%B0%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%83-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D1%96-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D1%87%D0%B5-%D0%BC%D0%B8%D1%81%D1%82%D0%B5%D1%86%D1%82%D0%B2%D0%BE.jpg?s=612x612&w=0&k=20&c=F3IeFRTcfhCYPp7EMD2Bh4lfifqzqUIZz7bCOtu0s2w="
                alt="Photographer at work"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIPLOMAS */}
      <section
        className="about-diplomas"
        data-aos="fade-in"
        data-aos-duration="600"
      >
        <div className="section-inner">
          <h2 data-aos="fade-up" data-aos-duration="700">
            Diplomas
          </h2>
          <div className="diplomas-grid">
            {[
              "/img/756afa4b-b748-4153-8762-27054dd770af.png",
              "/img/843b5e1e-ccf3-43fc-9d39-969e0826a322.png",
              "/img/2701f8ea-d4b2-43ec-81f5-cf45d1811e6b.png",
              "/img/d1927590-9dc8-431d-aa92-fd33d7489431.png",
            ].map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`Diploma ${i + 1}`}
                data-aos="zoom-in"
                data-aos-delay={i * 120}
                data-aos-duration="650"
              />
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section
        className="about-experience"
        data-aos="fade-in"
        data-aos-duration="600"
      >
        <div className="section-inner">
          <div className="experience-grid">
            <div
              className="experience-text"
              data-aos="fade-right"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
            >
              <h2 data-aos="fade-up" data-aos-delay="60">
                Experience
              </h2>
              <p data-aos="fade-up" data-aos-delay="140">
                Основний напрямок моєї роботи сьогодні — це весільна фотографія
                та сімейні фотосесії...
              </p>
              <p data-aos="fade-up" data-aos-delay="220">
                За роки практики я провів сотні весільних зйомок, десятки
                рекламних кампаній...
              </p>

              <div
                className="experience-quote"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <img
                  src="https://loop.com.ua/image/cache/catalog/category/delovaya-fotosessiya780-min-780x780.jpg"
                  alt="Photographer"
                />
                <p>
                  Я Макс, і моя головна місія — зберегти ваші щирі моменти у
                  світлинах.
                </p>
              </div>
            </div>

            <div
              className="experience-photo-large"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-easing="ease-out-cubic"
            >
              <img
                src="https://media.istockphoto.com/id/903724814/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D1%80%D1%83%D0%B7%D1%96-%D1%80%D0%BE%D0%B1%D0%BB%D1%8F%D1%82%D1%8C-%D1%81%D0%B5%D0%BB%D1%84%D1%96-%D1%80%D0%B0%D0%B7%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%B2%D0%B5%D1%87%D1%96%D1%80%D1%86%D1%96.jpg?s=612x612&w=0&k=20&c=JPBu_BpP_eiUGUq3x8UKCRZe2eyubXHwqiDjqYflfNA="
                alt="Photographer at work"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section
        className="about-stats"
        data-aos="fade-in"
        data-aos-duration="600"
      >
        <div className="section-inner stats-inner">
          {a.achievements.map(
            (ach: { value: string; label: string }, i: number) => (
              <div
                className="stat"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 120}
                data-aos-duration="600"
              >
                <div className="value">{ach.value}</div>
                <div className="label">{ach.label}</div>
              </div>
            ),
          )}
        </div>
      </section>

      {/* REEL */}
      <section
        className="about-reel"
        data-aos="fade-in"
        data-aos-duration="600"
      >
        <div className="section-inner">
          <div
            className="reel full-bleed"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
          >
            <video
              ref={reelRef}
              src="/video/14114596_1920_1080_25fps.mp4"
              playsInline
              autoPlay
              loop
              muted={reelMuted}
              controls={false}
            />
            <button
              className="reel-ctl"
              onClick={() => setReelMuted((m) => !m)}
              aria-label={reelMuted ? "Unmute" : "Mute"}
              type="button"
            >
              {reelMuted ? "🔇" : "🔊"}
            </button>
            <div className="reel-gradient" />
          </div>
        </div>
      </section>

      {/* STRIP GALLERY */}
      <section
        className="about-strip"
        data-aos="fade-in"
        data-aos-duration="600"
      >
        <div className="section-inner">
          <div className="strip">
            {a.stripImages.map((src: string, i: number) => (
              <img
                key={i}
                src={src}
                alt={`about-${i}`}
                data-aos="fade-up"
                data-aos-delay={i * 90}
                data-aos-duration="650"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
