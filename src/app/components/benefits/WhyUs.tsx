"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import styles from "./WhyUs.module.css";
import { ArrowRight, CarFront, Chat, LightningCharge, Tools } from "react-bootstrap-icons";

const items = [
  {
    Icon: Tools,
    title: "Equipe Especializada",
    description: "Mecânicos com formação técnica e atualização constante em sistemas modernos.",
  },
  {
    Icon: CarFront,
    title: "Nacionais e Importados",
    description: "Scanner compatível com todas as marcas e peças originais ou equivalentes de fábrica.",
  },
  {
    Icon: Chat,
    title: "Orçamento Transparente",
    description: "Aprovação antes de cada serviço. Nada é executado sem você saber o preço final.",
  },
  {
    Icon: LightningCharge,
    title: "Entrega Rápida",
    description: "Prazos realistas e cumpridos — porque sabemos que você precisa do seu carro.",
  },
];

export default function WhyUs() {
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = itemsRef.current?.querySelectorAll(`.${styles.whyItem}`);
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
    <section id="diferenciais" className="section-alt">
      <div className="container">
        <div className={styles.whyGrid}>
          <div className={styles.whyLeft}>
            <span className="kicker">Por Que Nos Escolher</span>
            <h2 className={styles.whyTitle}>
              Confiança em Cada <span className="accent">Detalhe</span>
            </h2>
            <p className={styles.whyText}>
              Mais de três décadas consertando carros do jeito certo. Sem enrolação, sem surpresas
              na conta, sem peças duvidosas.
            </p>
            <Link href="#cta" className="btn btn-primary">
              Agendar Atendimento
              <ArrowRight />
            </Link>
          </div>

          <div className={styles.whyItems} ref={itemsRef}>
            {items.map(({ Icon, title, description }) => (
              <div key={title} className={styles.whyItem}>
                <div className={styles.whyItemIcon}>
                  <Icon size={25} />
                </div>
                <div>
                  <h4 className={styles.whyItemTitle}>{title}</h4>
                  <p className={styles.whyItemDesc}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
