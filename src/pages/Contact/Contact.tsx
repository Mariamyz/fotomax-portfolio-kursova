
import "./Contact.scss";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { submitLead } from "../../features/leads/leadsSlice";
import { enqueueSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/* ——— Текст/лінки ——— */
const NAME = "МАКСИМ МАЗУРКЕВИЧ";
const TITLE = "Професійний сімейний та весільний фотограф";

const PHONE_DISPLAY = "+380 (67) 123-45-67";
const PHONE_TEL = "+380671234567";

const LINKS = {
  whatsapp: `https://wa.me/${PHONE_TEL}`,
  instagram: "https://instagram.com/your_nickname",
  telegram: "https://t.me/your_nickname",
  facebook: "https://facebook.com/your_page",
  email: "mailto:hello@fotomax.ua",
};

const portrait = "/img/c470272f-7d82-48f8-842c-8ee50b54d781.png";


const schema = z.object({
  name: z.string().min(2, "Вкажіть ім’я"),
  phone: z.string().min(6, "Вкажіть телефон"),
  message: z.string().max(1000).optional(),
});
type FormValues = z.infer<typeof schema>;

export default function Contact() {
  const dispatch = useAppDispatch();
  const sending = useAppSelector((s) => s.leads.sending);

  const { register, handleSubmit, reset, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values: FormValues) => {
    try {
      await dispatch(submitLead(values)).unwrap();
      enqueueSnackbar("Дякую! Я з вами зв’яжуся.", { variant: "success" });
      reset();
    } catch {
      enqueueSnackbar("Щось пішло не так, спробуйте ще раз.", { variant: "error" });
    }
  };

  return (
    <div className="contact-page">
      {/* HERO з портретом */}
      {portrait ? (
        <section className="contact-hero">
          <div className="section-inner">
            <div className="hero-card">
              <img
                className="portrait"
                src={portrait}
                alt="Fotomax — портрет фотографа"
                loading="lazy"
              />
              <div className="hero-glow" aria-hidden />
            </div>
          </div>
        </section>
      ) : null}

      {/* Основний блок: заголовок + форма */}
      <section className="contact-main">
        <div className="section-inner narrow">
          <div className="heading">
            <div className="eyebrow">{NAME}</div>
            <h1 className="page-title">{TITLE}</h1>
            <a className="phone" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
          </div>

          {/* Форма заявки */}
          <form className="lead-form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="field">
              <label>Ім’я</label>
              <input placeholder="Ваше ім’я" {...register("name")} />
              {formState.errors.name && (
                <div className="error">{formState.errors.name.message}</div>
              )}
            </div>

            <div className="field">
              <label>Телефон</label>
              <input placeholder="+380..." {...register("phone")} />
              {formState.errors.phone && (
                <div className="error">{formState.errors.phone.message}</div>
              )}
            </div>

            <div className="field">
              <label>Повідомлення (необов’язково)</label>
              <textarea rows={4} placeholder="Коротко опишіть запит..." {...register("message")} />
              {formState.errors.message && (
                <div className="error">{formState.errors.message.message}</div>
              )}
            </div>

            <button className="submit" type="submit" disabled={sending}>
              {sending ? "Надсилаю..." : "Надіслати заявку"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
