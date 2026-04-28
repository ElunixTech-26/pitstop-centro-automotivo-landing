"use client";

import { useEffect, useRef } from "react";
 import styles from "./Testimonials.module.css";
import { Star } from "react-bootstrap-icons";

const testimonials = [
  {
    initials: "MC",
    text: "Levei meu carro com um problema que outras oficinas não resolveram. A equipe identificou em minutos e corrigiu no mesmo dia. Ficou perfeito.",
    name: "Marcos Corrêa",
    role: "Cliente desde 2021",
  },
  {
    initials: "JR",
    text: "Trabalho sério e sem enrolação. Fizeram revisão completa na minha Hilux e explicaram cada item. Preço justo e atendimento impecável.",
    name: "Juliana Ribeiro",
    role: "Cliente desde 2019",
  },
  {
    initials: "RS",
    text: "Indicação certeira. Tenho um Audi e eles dominam os importados. Preço muito melhor que a concessionária, com a mesma qualidade técnica.",
    name: "Rafael Soares",
    role: "Cliente desde 2023",
  },
];

export default function Testimonials() {
  const gridRef = useRef<HTMLDivElement>(null);

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

        <div className={styles.testimonialsGrid} ref={gridRef}>
          {testimonials.map(({ initials, text, name, role }) => (
            <div key={name} className={styles.testimonialCard}>
              <div className={styles.quoteMark}>&ldquo;</div>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className={styles.testimonialText}>{text}</p>
              <div className={styles.testimonialPerson}>
                <div className={styles.avatar}>{initials}</div>
                <div>
                  <div className={styles.personName}>{name}</div>
                  <div className={styles.personRole}>{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
