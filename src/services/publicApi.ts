import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "52389265-b28478e3c09f021e0e86c65af"; // ключ

type PixabayHit = {
  largeImageURL: string;
  webformatURL: string;
  id: number;
};

type PixabayResponse = {
  hits: PixabayHit[];
  totalHits: number;
};

export type PhotosParams =
  | number
  | {
      q?: string;
      limit?: number;
    };

export const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pixabay.com/api/" }),
  endpoints: (builder) => ({
    getPhotos: builder.query<{ images: string[] }, PhotosParams>({
      query: (arg) => {
        const q =
          typeof arg === "number"
            ? "wedding photography"
            : arg?.q || "wedding photography";
        const perPage =
          typeof arg === "number"
            ? arg
            : Math.max(1, Math.min(arg?.limit || 30, 200));

        const params = new URLSearchParams({
          key: API_KEY,
          q,
          image_type: "photo",
          safesearch: "true",
          orientation: "horizontal",
          per_page: String(perPage),
        });

        return `?${params.toString()}`;
      },
      transformResponse: (res: PixabayResponse) => ({
        images: res.hits
          .map((h) => h.largeImageURL || h.webformatURL)
          .filter(Boolean),
      }),
    }),
  }),
});

export const { useGetPhotosQuery } = publicApi;
