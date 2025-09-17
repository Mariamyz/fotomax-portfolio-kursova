import "./About.scss";
import { useContent } from "../../content/ContentContext";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const { content } = useContent();
  const a = content.about;

  /* video */
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
      { threshold: 0.5 }
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
              <h1>ABOUT ME</h1>
              <span className="divider" />
              {a.bio.slice(0, 3).map((p: string, i: number) => (
                <p key={i}>{p}</p>
              ))}
              <a className="cta" href="/contact">
                Book a session <span className="arrow">›</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="about-awards">
        <div className="section-inner">
          <div className="awards-grid reverse">
            <div className="awards-text">
              <h2>Awards</h2>
              <ul>
                <li>ТОП-100 весільних фотографів (версія MyWed, 2021)</li>
                <li>Переможець «Кращий репортажний весільний фотограф» (2020)</li>
                <li>#55 місце в міжнародному рейтингу TOP100AWARDS (2022)</li>
                <li>Кращий весільний фотограф у Києві (версія WeddingUA, 2019)</li>
              </ul>
            </div>
            <div className="awards-photo">
            <img
              src="https://media.istockphoto.com/id/802955798/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%B5%D1%81%D1%96%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84-%D1%84%D0%BE%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D1%83%D1%94-%D0%BD%D0%B0%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D0%BE%D0%B3%D0%BE-%D1%96-%D0%BD%D0%B0%D1%80%D0%B5%D1%87%D0%B5%D0%BD%D1%83-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D1%96-%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D1%82%D0%B2%D0%BE%D1%80%D1%87%D0%B5-%D0%BC%D0%B8%D1%81%D1%82%D0%B5%D1%86%D1%82%D0%B2%D0%BE.jpg?s=612x612&w=0&k=20&c=F3IeFRTcfhCYPp7EMD2Bh4lfifqzqUIZz7bCOtu0s2w="
              alt="Photographer at work"
            />
            </div>
          </div>
        </div>
      </section>

      <section className="about-diplomas">
        <div className="section-inner">
          <h2>Diplomas</h2>
          <div className="diplomas-grid">
            <img src="/img/756afa4b-b748-4153-8762-27054dd770af.png" alt="Diploma 1" />
            <img src="/img/843b5e1e-ccf3-43fc-9d39-969e0826a322.png" alt="Diploma 2" />
            <img src="/img/2701f8ea-d4b2-43ec-81f5-cf45d1811e6b.png" alt="Diploma 3" />
            <img src="/img/d1927590-9dc8-431d-aa92-fd33d7489431.png" alt="Diploma 4" />
          </div>
        </div>
      </section>

      <section className="about-experience">
        <div className="section-inner">
          <div className="experience-grid">
            <div className="experience-text">
              <h2>Experience</h2>
              <p>
                Основний напрямок моєї роботи сьогодні — це весільна фотографія та сімейні
                фотосесії...
              </p>
              <p>
                За роки практики я провів сотні весільних зйомок, десятки рекламних кампаній...
              </p>
              <div className="experience-quote">
              <img
                src="https://loop.com.ua/image/cache/catalog/category/delovaya-fotosessiya780-min-780x780.jpg"
                alt="Photographer"
              />
                <p>Я Макс, і моя головна місія — зберегти ваші щирі моменти у світлинах.</p>
              </div>
            </div>

            <div className="experience-photo-large">
              <img
                src="https://media.istockphoto.com/id/903724814/uk/%D1%84%D0%BE%D1%82%D0%BE/%D0%B4%D1%80%D1%83%D0%B7%D1%96-%D1%80%D0%BE%D0%B1%D0%BB%D1%8F%D1%82%D1%8C-%D1%81%D0%B5%D0%BB%D1%84%D1%96-%D1%80%D0%B0%D0%B7%D0%BE%D0%BC-%D0%BD%D0%B0-%D0%B2%D0%B5%D1%87%D1%96%D1%80%D1%86%D1%96.jpg?s=612x612&w=0&k=20&c=JPBu_BpP_eiUGUq3x8UKCRZe2eyubXHwqiDjqYflfNA="
                alt="Photographer at work"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="about-stats">
        <div className="section-inner stats-inner">
          {a.achievements.map(
            (ach: { value: string; label: string }, i: number) => (
              <div className="stat" key={i}>
                <div className="value">{ach.value}</div>
                <div className="label">{ach.label}</div>
              </div>
            )
          )}
        </div>
      </section>

      <section className="about-reel">
        <div className="section-inner">
          <div className="reel full-bleed">
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

      <section className="about-strip">
        <div className="section-inner">
          <div className="strip">
            {a.stripImages.map((src: string, i: number) => (
              <img key={i} src={src} alt={`about-${i}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
