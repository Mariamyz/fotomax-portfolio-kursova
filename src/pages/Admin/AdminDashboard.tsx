import { useState } from "react";
import { useContent } from "../../content/ContentContext";
import "./AdminDashboard.scss";

const fileToDataURL = (file: File) =>
  new Promise<string>((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result));
    r.onerror = reject;
    r.readAsDataURL(file);
  });

export default function AdminDashboard() {
  const { content, setContent, reset } = useContent();
  const [local, setLocal] = useState(content);
  const [saving, setSaving] = useState(false);

  const onChange = (path: string, value: any) => {
    setLocal((prev) => {
      const next: any = structuredClone(prev);
      const keys = path.split(".");
      let obj = next;
      for (let i = 0; i < keys.length - 1; i++) obj = obj[keys[i]];
      obj[keys[keys.length - 1]] = value;
      return next;
    });
  };

  const addStripUrl = (url: string) => {
    if (!url.trim()) return;
    setLocal((p) => ({
      ...p,
      about: { ...p.about, stripImages: [url.trim(), ...p.about.stripImages] },
    }));
  };

  const addStripFile = async (file?: File) => {
    if (!file) return;
    const data = await fileToDataURL(file);
    setLocal((p) => ({
      ...p,
      about: { ...p.about, stripImages: [data, ...p.about.stripImages] },
    }));
  };

  const removeStrip = (i: number) => {
    setLocal((p) => ({
      ...p,
      about: {
        ...p.about,
        stripImages: p.about.stripImages.filter((_, idx) => idx !== i),
      },
    }));
  };

  const addAward = () =>
    setLocal((p) => ({
      ...p,
      about: { ...p.about, awards: ["Нова нагорода", ...p.about.awards] },
    }));
  const removeAward = (i: number) =>
    setLocal((p) => ({
      ...p,
      about: {
        ...p.about,
        awards: p.about.awards.filter((_, idx) => idx !== i),
      },
    }));

  const saveAll = async () => {
    setSaving(true);
    setContent(local);
    setTimeout(() => setSaving(false), 350);
  };

  return (
    <div className="admin container">
      <h1>Адмінка</h1>

      <section className="card">
        <h2>Головний блок (Hero)</h2>
        <label>
          Заголовок
          <input
            value={local.hero.title}
            onChange={(e) => onChange("hero.title", e.target.value)}
          />
        </label>
        <label>
          Підзаголовок
          <input
            value={local.hero.subtitle}
            onChange={(e) => onChange("hero.subtitle", e.target.value)}
          />
        </label>
        <label>
          Фото (URL)
          <input
            value={local.hero.imageUrl}
            onChange={(e) => onChange("hero.imageUrl", e.target.value)}
            placeholder="https://..."
          />
        </label>
        <div className="preview">
          <img src={local.hero.imageUrl} alt="hero" />
        </div>
      </section>

      <section className="card">
        <h2>About — Біо</h2>
        {local.about.bio.map((t, i) => (
          <label key={i}>
            Абзац {i + 1}
            <textarea
              value={t}
              onChange={(e) => {
                const v = e.target.value;
                setLocal((p) => {
                  const bio = [...p.about.bio];
                  bio[i] = v;
                  return { ...p, about: { ...p.about, bio } };
                });
              }}
            />
          </label>
        ))}
        <button
          onClick={() =>
            setLocal((p) => ({
              ...p,
              about: { ...p.about, bio: [...p.about.bio, "Новий абзац"] },
            }))
          }
        >
          + додати абзац
        </button>
      </section>

      <section className="card">
        <h2>About — Нагороди</h2>
        <button onClick={addAward}>+ додати</button>
        <ul className="list">
          {local.about.awards.map((a, i) => (
            <li key={i}>
              <input
                value={a}
                onChange={(e) => {
                  const v = e.target.value;
                  setLocal((p) => {
                    const awards = [...p.about.awards];
                    awards[i] = v;
                    return { ...p, about: { ...p.about, awards } };
                  });
                }}
              />
              <button onClick={() => removeAward(i)}>✕</button>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>About — Досвід</h2>
        {local.about.experience.map((t, i) => (
          <label key={i}>
            Пункт {i + 1}
            <input
              value={t}
              onChange={(e) => {
                const v = e.target.value;
                setLocal((p) => {
                  const exp = [...p.about.experience];
                  exp[i] = v;
                  return { ...p, about: { ...p.about, experience: exp } };
                });
              }}
            />
          </label>
        ))}
        <button
          onClick={() =>
            setLocal((p) => ({
              ...p,
              about: {
                ...p.about,
                experience: [...p.about.experience, "Новий пункт"],
              },
            }))
          }
        >
          + додати пункт
        </button>
      </section>

      <section className="card">
        <h2>About — Досягнення (цифри)</h2>
        <ul className="list">
          {local.about.achievements.map((ach, i) => (
            <li key={i} className="two">
              <input
                value={ach.label}
                onChange={(e) => {
                  const v = e.target.value;
                  setLocal((p) => {
                    const arr = [...p.about.achievements];
                    arr[i] = { ...arr[i], label: v };
                    return { ...p, about: { ...p.about, achievements: arr } };
                  });
                }}
                placeholder="Назва"
              />
              <input
                value={ach.value}
                onChange={(e) => {
                  const v = e.target.value;
                  setLocal((p) => {
                    const arr = [...p.about.achievements];
                    arr[i] = { ...arr[i], value: v };
                    return { ...p, about: { ...p.about, achievements: arr } };
                  });
                }}
                placeholder="Значення"
              />
            </li>
          ))}
        </ul>
        <button
          onClick={() =>
            setLocal((p) => ({
              ...p,
              about: {
                ...p.about,
                achievements: [
                  ...p.about.achievements,
                  { label: "Нове", value: "0" },
                ],
              },
            }))
          }
        >
          + додати
        </button>
      </section>

      <section className="card">
        <h2>About — Фотосмуга</h2>
        <div className="row">
          <input id="strip-url" placeholder="URL зображення" />
          <button
            onClick={() => {
              const el = document.getElementById(
                "strip-url",
              ) as HTMLInputElement;
              addStripUrl(el.value);
              el.value = "";
            }}
          >
            Додати URL
          </button>
          <label className="file-btn">
            Завантажити файл
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => addStripFile(e.target.files?.[0] ?? undefined)}
            />
          </label>
        </div>
        <ul className="grid">
          {local.about.stripImages.map((src, i) => (
            <li key={i}>
              <img src={src} alt={`strip-${i}`} />
              <button className="rm" onClick={() => removeStrip(i)}>
                ✕
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="actions-bar">
        <button onClick={saveAll} disabled={saving}>
          {saving ? "Збереження..." : "Зберегти"}
        </button>
        <button className="danger" onClick={reset}>
          Скинути до дефолтних
        </button>
      </div>
    </div>
  );
}
