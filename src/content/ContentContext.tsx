import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "site_content_v1";

export type SiteContent = {
  hero: { title: string; subtitle: string; imageUrl: string; };
  about: {
    bio: string[];
    awards: string[];
    experience: string[];
    achievements: { label: string; value: string }[];
    stripImages: string[];
  };
  gallery: string[];
};

const defaultContent: SiteContent = {
  hero: {
    title: "Story-driven photography",
    subtitle: "Honest, timeless, natural.",
    imageUrl:
      "https://imglife.pravda.com.ua/images/doc/a/0/a0380ab-vesillia-photo-golov.jpg",
  },
  about: {
    bio: [
      "Я — професійний репортажний фотограф з 2017 року. Але історія з фото почалася ще у 2010-му.",
      "Тоді я захопився Photoshop та іншими редакторами, знімав творчі сесії та робив фотокниги.",
    ],
    awards: [
      "ТОП-100 весільних фотографів (версія MyWed, 2021)",
      "Переможець «Кращий репортажний весільний фотограф» (2020)",
    ],
    experience: [
      "Знімаю рекламу, репортажі подій, концерти, портрети та індивідуальні зйомки.",
      "Основний напрям — весільна фотографія. Для мене фотографія — це про щирість та момент.",
    ],
    achievements: [
      { label: "Років у зйомці", value: "8+" },
      { label: "Весіль", value: "120+" },
      { label: "Проєктів", value: "300+" },
      { label: "Міст", value: "20+" },
    ],
    stripImages: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  gallery: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
  ],
};

type ContentCtx = {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  save: () => void;
  reset: () => void;
};

const Ctx = createContext<ContentCtx | null>(null);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultContent;
    } catch { return defaultContent; }
  });

  const api = useMemo<ContentCtx>(() => ({
    content,
    setContent,
    save: () => localStorage.setItem(STORAGE_KEY, JSON.stringify(content)),
    reset: () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultContent));
      setContent(defaultContent);
    },
  }), [content]);

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(content)); }, [content]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
};

export const useContent = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useContent must be used within ContentProvider");
  return v;
};
