import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ForgotPassword.scss";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (_c?: Container) => {}, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Вкажи коректний email");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 900));
    setSending(false);
    setDone(true);
  };

  return (
    <div className="auth-page">
      <Particles
        className="particles-bg"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 150, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: { min: 0.1, max: 1 } },
            size: { value: { min: 1, max: 2 } },
            move: { enable: true, speed: 0.2 },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          detectRetina: true,
        }}
      />

      <motion.div
        className="auth-box"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Forgot your password</h2>

        {!done ? (
          <form onSubmit={handleSubmit}>
            <p className="hint">
              Please enter the email you use to sign in to acme
            </p>

            <div className="input-icon">
              <FaUser className="icon" />
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="username"
                required
              />
            </div>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Request password reset"}
            </button>

            <div className="back">
              <Link to="/admin/login">Back to Login</Link>
            </div>
          </form>
        ) : (
          <div className="success">
            <p>
              Якщо обліковка існує, ми надіслали лист на <b>{email}</b>. Перевір
              пошту (і спам).
            </p>
            <Link to="/admin/login" className="back-link">
              Повернутися до входу
            </Link>
          </div>
        )}
      </motion.div>
    </div>
  );
}
