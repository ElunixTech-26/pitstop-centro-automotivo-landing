"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRepeat,
  ArrowRight,
  Brush,
  Bullseye,
  CarFront,
  Compass,
   GearWideConnected,
  Hammer,
  LightningChargeFill,
  RecordCircle,
  ShieldCheck,
 } from "react-bootstrap-icons";
import styles from "./Services.module.css";

const services = [
  {
    id: "01",
    Icon: GearWideConnected,
    title: "Suspensão",
    description: "Diagnóstico e reparo de amortecedores, molas e bandejas para estabilidade total.",
  },
  {
    id: "02",
    Icon: RecordCircle,
    title: "Freios",
    description: "Troca de pastilhas, discos e fluido, segurança certificada para você e sua família.",
  },
  {
    id: "03",
    Icon: Bullseye, // ou ShieldCheck — sugestões abaixo
    title: "Conserto de Pneus Cortados",
    description: "Reparo profissional de pneus furados ou cortados com vulcanização.",
  },
  {
    id: "04",
    Icon: ArrowRepeat,
    title: "Troca de Correias",
    description: "Correia dentada, tensores e polias trocadas no prazo certo, evitando prejuízo maior.",
  },
  {
    id: "05",
    Icon: Compass,
    title: "Alinhamento & Balanceamento",
    description: "Geometria computadorizada para mais durabilidade dos pneus e direção firme.",
  },
  {
    id: "06",
    Icon: LightningChargeFill,
    title: "Elétrica Automotiva",
    description: "Bateria, alternador, injeção eletrônica e sensores, solução rápida e confiável.",
  },
  {
    id: "07",
    Icon: Brush,
    title: "Pintura",
    description: "Pintura automotiva profissional com cabine fechada, secagem controlada e acabamento de fábrica.",
  },
  {
    id: "08",
    Icon: CarFront,
    title: "Chapeação",
    description: "Reparo de lataria, funilaria e correção de avarias, seu carro como saiu da concessionária.",
  },
  {
    id: "09",
    Icon: Hammer,
    title: "Troca de Pneus & Rodas",
    description: "Pneus de marcas reconhecidas, montagem com balanceamento incluso e variedade de rodas esportivas.",
  },
  {
    id: "10",
    Icon: ShieldCheck,
    title: "Revisão Preventiva",
    description: "Checklist completo de itens críticos antes de viagens, com laudo escrito e fotos do diagnóstico.",
  },
];

export default function Services() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = gridRef.current?.querySelectorAll(`.${styles.serviceCard}`);
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
    <section id="servicos" className="section-dark">
      <div className="container">
        <span className="kicker">Nossos Serviços</span>
        <h2 className="section-title">
          O Que <span className="accent">Fazemos</span>
        </h2>

        <div className={styles.servicesGrid} ref={gridRef}>
          {services.map(({ id, Icon, title, description }) => (
            <div key={id} className={styles.serviceCard}>
              <span className={styles.serviceNum}>/{id}</span>
              <div className={styles.serviceIcon}>
                <Icon size={28} />
              </div>
              <h3 className={styles.serviceTitle}>{title}</h3>
              <p className={styles.serviceDesc}>{description}</p>
            </div>
          ))}
        </div>
        <div className={`${styles.dragDiv} md:hidden`}>
          <span>Arraste para o lado</span>
          <ArrowRight />
        </div>
      </div>
    </section>
  );
}
