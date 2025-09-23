import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../../assets/lottie/page404.json";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <main className="nf-wrap">
      <div className="nf-card">
        <div className="nf-anim">
          <Lottie animationData={animationData} loop autoplay />
        </div>

        <h1 className="nf-title">Сторінку не знайдено</h1>
        <p className="nf-text">
          Можливо, адреса введена з помилкою або сторінка була переміщена.
        </p>

        <Link to="/" className="nf-btn">На головну</Link>
      </div>
    </main>
  );
}
