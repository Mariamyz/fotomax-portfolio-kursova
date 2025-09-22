import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
  alpha,
  useTheme,
  Link as MuiLink,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const PHONE_TEL = "+380671234567";
const wa = (pkg: string) =>
  `https://wa.me/${PHONE_TEL.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
    `Hello! I'd love to book the "${pkg}" package.`
  )}`;

const PACKAGES = [
  {
    name: "Сімейна фотографія",
    duration: "2 hr 30 min",
    price: "$150",
    img: "public/img/vesilna-fotosesiya-21-705x471.jpg",
  },
  {
    name: "Фотограія вагітності",
    duration: "2 hr 30 min",
    price: "$150",
    img: "public/img/DSC_5449-min-1.jpg",
  },
  {
    name: "Дитяча фотографія",
    duration: "2 hr 30 min",
    price: "$150",
    img: "public/img/6.jpg",
  },
];

const CARD_IMG_H = { xs: 260, md: 320, lg: 340 };
const TITLE_FZ = { xs: 22, md: 26 };
const PRICE_FZ = { xs: 18, md: 20 };

export default function Pricing() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: "var(--section-dark)", color: "var(--text-main)" }}>
     
      <Container sx={{ py: { xs: 4, md: 7 }, textAlign: "center" }}>
        <Typography
          component="h1"
          className="page-title"          
          sx={{
            fontSize: { xs: 34, md: 48 },
            letterSpacing: ".06em",
            fontFamily: "var(--font-accent), 'Playfair Display', serif !important",
            mb: 1.5,
          }}
        >
          Book a Session
        </Typography>
      </Container>

      {/* Cards */}
      <Container maxWidth="xl" sx={{ pb: { xs: 5, md: 7 } }}>
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          justifyContent="center"
          sx={{ mx: "auto", maxWidth: 1500 }}
        >
          {PACKAGES.map((p) => (
            <Grid key={p.name} item xs={12} sm={10} md={4} sx={{ display: "flex" }}>
              <Card
                elevation={8}
                sx={{
                  width: "100%",
                  maxWidth: 460,
                  mx: "auto",
                  bgcolor: "#fff",
                  color: "#0b0b0b",
                  borderRadius: 2,
                  overflow: "hidden",
                  border: `1px solid ${alpha("#000", 0.06)}`,
                  transition:
                    "transform .22s ease, box-shadow .25s ease, border-color .25s ease, filter .25s ease",
                  "&:hover": {
                    transform: "translateY(-6px) scale(1.02)",
                    boxShadow: 14,
                    borderColor: alpha(theme.palette.primary.main, 0.24),
                    filter: "brightness(1.03)",
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={p.img}
                  alt={p.name}
                  sx={{ height: CARD_IMG_H, objectFit: "cover" }}
                />

                <CardContent sx={{ px: { xs: 3, md: 3.5 }, pt: 3, pb: 0 }}>
                 
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-decor)',
                      fontStyle: "italic",
                      fontSize: TITLE_FZ,
                      lineHeight: 1.25,
                      mb: 1.2,
                    }}
                  >
                    {p.name}
                  </Typography>

                  <Stack spacing={1.2} sx={{ mb: 2 }}>
                    <Typography variant="body1" sx={{ opacity: 0.8 }}>
                      {p.duration}
                    </Typography>
                    <Typography
                      sx={{ fontSize: PRICE_FZ, fontWeight: 700, letterSpacing: ".01em" }}
                    >
                      {p.price}
                    </Typography>
                  </Stack>
                </CardContent>

                <CardActions sx={{ px: { xs: 3, md: 3.5 }, pb: 3, pt: 1 }}>
                  <Button
                    fullWidth
                    size="large"
                    startIcon={<WhatsAppIcon />}
                    href={wa(p.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      borderRadius: 999,
                      px: 2.4,
                      py: 1.3,
                      bgcolor: "#0b0b0b",
                      color: "#fff",
                      textTransform: "none",
                      fontWeight: 700,
                      boxShadow: "0 10px 28px rgba(0,0,0,.28)",
                      "&:hover": {
                        bgcolor: alpha("#0b0b0b", 0.9),
                        boxShadow: "0 16px 36px rgba(0,0,0,.36)",
                      },
                    }}
                  >
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

       {/* Phone  */}
      <Container sx={{ pb: { xs: 8, md: 10 }, textAlign: "center" }}>
        <Typography sx={{ color: "rgba(255,255,255,.72)" }}>
        Бажаєте зателефонувати? Бронювання також доступне за телефоном:&nbsp;
          <MuiLink
            href={`tel:${PHONE_TEL.replace(/[^\d+]/g, "")}`}
            color="inherit"
            underline="always"
          >
            {PHONE_TEL}
          </MuiLink>
          .
        </Typography>
      </Container>
    </Box>
  );
}
