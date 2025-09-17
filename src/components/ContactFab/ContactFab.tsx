import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

type Props = {
  label?: string;
  avatarSrc?: string;          
  phone?: string;             
  whatsapp?: string;           
  telegram?: string;         
  instagram?: string;          
  facebook?: string;          
  fabSize?: number;            
};

export default function ContactFab({
  label = "Foto Max",
  avatarSrc,
  phone,
  whatsapp,
  telegram,
  instagram,
  facebook,
  fabSize = 64,
}: Props) {
  
  const size = Math.max(48, fabSize);    
  const inner = Math.max(36, size - 10);  

  
  const initials =
    (label.match(/\b\w/g) || []).slice(0, 2).join("").toUpperCase() || "FM";

  const onlyDigits = (v?: string) => (v ? v.replace(/[^\d+]/g, "") : "");
  const asUrl = (v?: string) => (v && /^https?:\/\//i.test(v) ? v : undefined);

  const telHref = phone ? `tel:${onlyDigits(phone)}` : undefined;
  const waHref = whatsapp ? `https://wa.me/${onlyDigits(whatsapp)}` : undefined;
  const tgHref = telegram ? `https://t.me/${telegram.replace(/^@/, "")}` : undefined;
  const igHref = instagram
    ? asUrl(instagram) ?? `https://instagram.com/${instagram.replace(/^@/, "")}`
    : undefined;
  const fbHref = facebook
    ? asUrl(facebook) ?? `https://facebook.com/${facebook.replace(/^@/, "")}`
    : undefined;

  const icon = (
    <Avatar
      src={avatarSrc}
      alt={label}
      sx={{
        width: inner,
        height: inner,
        fontWeight: 700,
        fontSize: inner * 0.42,
        bgcolor: "rgba(255,255,255,.10)",
        border: "1px solid rgba(255,255,255,.18)",
      }}
    >
      {initials}
    </Avatar>
  );

  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: 16, sm: 24 },
        bottom: { xs: 16, sm: 24 },
        zIndex: 1400,
      }}
    >
      <SpeedDial
        ariaLabel="Контакти"
        icon={icon}
        direction="up"
        FabProps={{
          sx: {
            width: size,
            height: size,
            minWidth: size,
            minHeight: size,
            p: 0,
            borderRadius: "50%",
            bgcolor: "transparent",
            boxShadow: "0 12px 32px rgba(0,0,0,.45)",
            "&:hover": { bgcolor: "transparent" },
          },
        }}
        sx={{
          "& .MuiSpeedDialAction-fab": { width: 44, height: 44 },
        }}
      >
        {telHref && (
          <SpeedDialAction
            icon={<PhoneIcon />}
            tooltipTitle="Подзвонити"
            onClick={() => (window.location.href = telHref)}
          />
        )}
        {waHref && (
          <SpeedDialAction
            icon={<WhatsAppIcon />}
            tooltipTitle="Написати у WhatsApp"
            onClick={() => window.open(waHref, "_blank")}
          />
        )}
        {tgHref && (
          <SpeedDialAction
            icon={<TelegramIcon />}
            tooltipTitle="Написати у Telegram"
            onClick={() => window.open(tgHref, "_blank")}
          />
        )}
        {igHref && (
          <SpeedDialAction
            icon={<InstagramIcon />}
            tooltipTitle="В Instagram"
            onClick={() => window.open(igHref, "_blank")}
          />
        )}
        {fbHref && (
          <SpeedDialAction
            icon={<FacebookIcon />}
            tooltipTitle="У Facebook"
            onClick={() => window.open(fbHref, "_blank")}
          />
        )}
      </SpeedDial>
    </Box>
  );
}
