import * as React from "react";
import {
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@mui/material/styles";
import { useGetPhotosQuery } from "../../services/publicApi";
import "./Portfolio.scss";

export default function Portfolio() {
  // тягнемо 40 фото по запиту "wedding photography"
  const { data, isLoading, isError } = useGetPhotosQuery({
    q: "wedding photography",
    limit: 40,
  });

  const images = data?.images ?? [];

  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.down("sm"));
  const sm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const md = useMediaQuery(theme.breakpoints.between("md", "lg"));

  const cols = xs ? 1 : sm ? 2 : md ? 3 : 4;

  if (isLoading) {
    return (
      <Box
        sx={{
          py: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return (
      <Box sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h6">Не вдалося завантажити зображення.</Typography>
      </Box>
    );
  }

  return (
    <section className="portfolio-page">
      <Box
        className="section-inner"
        sx={{
          py: { xs: 4, md: 6 },
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            textAlign: "center",
            mb: { xs: 3, md: 4 },
            fontFamily: "var(--font-accent, 'Bebas Neue', cursive)",
            textTransform: "uppercase",
            letterSpacing: ".06em",
          }}
        >
          My robots
        </Typography>

        <Box
          sx={{
            width: "min(1400px, 100%)",
            mx: "auto",
          }}
        >
          <ImageList
            variant="masonry"
            cols={cols}
            gap={12}
            className="portfolio-grid"
          >
            {images.map((src, i) => (
              <ImageListItem key={`${src}-${i}`} className="portfolio-item">
                <img
                  src={`${src}?w=600&fit=crop&auto=format`}
                  srcSet={`${src}?w=600&fit=crop&auto=format&dpr=2 2x`}
                  alt={`wedding-${i}`}
                  loading="lazy"
                  className="portfolio-img"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Box>
    </section>
  );
}
