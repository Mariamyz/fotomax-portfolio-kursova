import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import type { Engine, Container } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import "./Login.scss";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async (_container?: Container) => {}, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctEmail = "admin@test.com";
    const correctPassword = "123456";

    if (email === correctEmail && password === correctPassword) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "/admin";
    } else {
      alert("Невірний email або пароль");
    }
  };

  return (
    <div className="login-page">
      <Particles
        id="bg-particles"
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
        className="login-box"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <div className="options">
            <label><input type="checkbox" /> Remember me</label>
            <Link to="/admin/forgot-password">Forgot password?</Link>
          </div>

          <button type="submit">Login</button>
        </form>
      </motion.div>
    </div>
  );
}
