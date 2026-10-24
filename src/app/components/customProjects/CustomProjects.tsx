"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./CustomProjects.module.css";
import { CheckCircleFill } from "react-bootstrap-icons";
import { WhatsAppIcon } from "../icons";
import { WHATSAPP_URL } from "@/app/lib/constants";

const gallery = [
  {
    src: "/detalhe-teto-solar-canoas.webp",
    alt: "Vidro do teto solar selecionado para instalação pela Pit Stop Centro Automotivo",
    label: "01",
    caption: "Peça selecionada",
  },
  {
    src: "/vista-interna-teto-solar-canoas.webp",
    alt: "Vista interna do teto solar durante instalação na Pit Stop Centro Automotivo",
    label: "02",
    caption: "Instalação em curso",
  },
  {
    src: "/carro-teto-solar-canoas.webp",
    alt: "Hilux com teto solar instalado pela Pit Stop Centro Automotivo",
    label: "03",
    caption: "Projeto finalizado",
  },
];

const benefits = [
  "Instalação executada com padrão de acabamento original de fábrica",
  "Compatibilidade com diversos modelos nacionais e importados",
  "Vedação reforçada e tratamento contra infiltrações",
  "Garantia escrita em peças e mão de obra",
];

export default function CustomProjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(`.${styles.revealItem}`);
    if (!elements) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => {
      el.classList.add("reveal");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section
      id="projetos"
      ref={sectionRef}
      className={`section-dark ${styles.section}`}
    >
      <div className="container">
        <div className={styles.header}>
          <span className="kicker">Projetos Especiais</span>
          <h2 className="section-title">
            Teto Solar <span className="accent">Sob Medida</span>
          </h2>
          <p className={styles.lead}>
            Transformamos seu carro com instalação profissional de teto solar.
            Projeto executado com acabamento original, vedação reforçada e
            cuidado em cada detalhe para você ter a experiência completa de
            dirigir com o céu acima.
          </p>
        </div>

        {/* Galeria narrativa — 3 fotos contando a história */}
        <div className={styles.gallery}>
          {gallery.map(({ src, alt, label, caption }) => (
            <figure key={src} className={`${styles.galleryItem} ${styles.revealItem}`}>
              <div className={styles.imageWrap}>
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={styles.image}
                  quality={88}
                />
                <div className={styles.imageBadge}>
                  <span className={styles.badgeDot} />
                  Projeto Pit Stop
                </div>
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.captionLabel}>{label}</span>
                <span className={styles.captionText}>{caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Bloco de benefícios + CTA — abaixo da galeria */}
        <div className={`${styles.details} ${styles.revealItem}`}>
          <div className={styles.detailsContent}>
            <h3 className={styles.detailsTitle}>
              Customização com padrão de fábrica
            </h3>
            <ul className={styles.benefitsList}>
              {benefits.map((benefit) => (
                <li key={benefit} className={styles.benefitItem}>
                  <CheckCircleFill className={styles.checkIcon} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.ctaWrap}>
            <a
              href={WHATSAPP_URL} data-track="projetos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              aria-label="Solicitar orçamento de teto solar pelo WhatsApp"
            >
              <WhatsAppIcon width={18} height={18} />
              Solicitar orçamento
            </a>
            <span className={styles.ctaNote}>
              Orçamento personalizado conforme o modelo do seu veículo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
