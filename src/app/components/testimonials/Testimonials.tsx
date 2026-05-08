"use client";

import { useEffect, useRef } from "react";
 import styles from "./Testimonials.module.css";
import { Star, StarFill } from "react-bootstrap-icons";

const testimonials = [
  {
    initials: "RC",
    text: "Realizei a troca dos quatro pneus do meu carro, fui muito bem atendido, uma experiência bem bacana. Um ótimo serviço prestado pelos colaboradores, obrigado pelo atendimento, sucesso!!!",
    name: "Ruan Costa"
  },
  {
    initials: "BA",
    text: "Meu marido e eu fomos hoje no Pit Stop e só temos elogios. Equipe de primeira, muito simpáticos, prestativos e preço justo. Excelente serviço e tudo feito com muito capricho.",
    name: "Bruna Andrade"
  },
  {
    initials: "JD",
    text: "Ótimo atendimento e serviço de qualidade",
    name: "João Vitor Doria"
  },
  {
    initials: "LD",
    text: "Muitas opções de rodas e pneus",
    name: "Leandro Dias"
  },
  {
    initials: "CB",
    text: "Lugar ótimo, pessoal muito atencioso.",
    name: "Cristhian Bueno"
  },
];

export default function Testimonials() {
  const gridRef = useRef<HTMLDivElement>(null);

  // Mantemos apenas a animação de reveal de quando o usuário chega na seção
  useEffect(() => {
    const elements = gridRef.current?.querySelectorAll(`.${styles.testimonialCard}`);
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
    <section id="depoimentos" className="section-dark">
      <div className="container">
        <span className="kicker">O Que Falam Por Aí</span>
        <h2 className="section-title">
          Clientes <span className="accent">Satisfeitos</span>
        </h2>

        {/* Container que esconde o que vaza para fora */}
        <div className={styles.carouselContainer} ref={gridRef}>
          {/* A pista que vai se mover */}
          <div className={styles.carouselTrack}>
            
            {/* GRUPO 1 */}
            <div className={styles.carouselGroup}>
              {testimonials.map(({ initials, text, name }) => (
                <div key={`g1-${name}`} className={styles.testimonialCard}>
                  <div className={styles.quoteMark}>&ldquo;</div>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarFill key={i} />
                    ))}
                  </div>
                  <p className={styles.testimonialText}>{text}</p>
                  <div className={styles.testimonialPerson}>
                    <div className={styles.avatar}>{initials}</div>
                    <div>
                      <div className={styles.personName}>{name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* GRUPO 2 (Clone perfeito para o loop infinito) */}
            <div className={styles.carouselGroup}>
              {testimonials.map(({ initials, text, name }) => (
                <div key={`g2-${name}`} className={styles.testimonialCard}>
                  <div className={styles.quoteMark}>&ldquo;</div>
                  <div className={styles.stars}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <StarFill key={i} />
                    ))}
                  </div>
                  <p className={styles.testimonialText}>{text}</p>
                  <div className={styles.testimonialPerson}>
                    <div className={styles.avatar}>{initials}</div>
                    <div>
                      <div className={styles.personName}>{name}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}