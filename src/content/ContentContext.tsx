import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const STORAGE_KEY = "site_content_v1";

export type SiteContent = {
  hero: { title: string; subtitle: string; imageUrl: string };
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
      "https://media.macphun.com/img/uploads/macphun/blog/3424/_11.webp?q=75&w=1710&h=906&resize=cover",
      "https://lh3.googleusercontent.com/proxy/YR4cyO79x1bUu5lLRrQCY8elTlDNbKABLLvbXVw0D9PS6uY62Fi_eWJqSfnQw4-8-lMw-HzW9BU_Q8fFVmANh2R2jC8Y7D2zRs2dxUkxDjwTgBgLwKoE",
      "https://lh3.googleusercontent.com/proxy/gXL9SInOoAAY9fAv054Ls8yqkzdZ2HeD2-QDTKGKHxe3hxbEzydR-k3G9vr2M-DSYlh-ii8gc-_QBsL3UhY36wrUAbIGOOsMrD-Ox8k5kRyAwJOP06p9",
      "https://assets.mobicard.com.ua/mobicard/articles/IicGKacVkJo0rcKXPCoWoO3j3rIeVTtqq5F4t3Z9.webp",
    ],
  },
  gallery: [
    "https://depositphotos-blog.s3.eu-west-1.amazonaws.com/uploads/2021/08/Complete-Guide-to-Family-Photography-Tips-Ideas-and-Trends_7.jpg",
    "https://frontpage.com.ua/wp-content/uploads/2020/11/family115.jpg",
  ],
};

type ContentCtx = {
  content: SiteContent;
  setContent: (c: SiteContent) => void;
  save: () => void;
  reset: () => void;
};

const Ctx = createContext<ContentCtx | null>(null);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [content, setContent] = useState<SiteContent>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : defaultContent;
    } catch {
      return defaultContent;
    }
  });

  const api = useMemo<ContentCtx>(
    () => ({
      content,
      setContent,
      save: () => localStorage.setItem(STORAGE_KEY, JSON.stringify(content)),
      reset: () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultContent));
        setContent(defaultContent);
      },
    }),
    [content],
  );

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  }, [content]);

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>;
};

export const useContent = () => {
  const v = useContext(Ctx);
  if (!v) throw new Error("useContent must be used within ContentProvider");
  return v;
};
