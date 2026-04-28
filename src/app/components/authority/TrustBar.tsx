"use client";

import { useEffect, useRef } from "react";
import styles from "./TrustBar.module.css";
import { CarFront, Clock, File, FileEarmark, FileEarmarkText, People } from "react-bootstrap-icons";

const items = [
  { Icon: Clock, number: "39+", label: "Anos de Experiência" },
  { Icon: CarFront, number: "Nacionais", label: "& Importados" },
  { Icon: People, number: "Equipe", label: "Qualificada" },
  { Icon: FileEarmarkText, number: "Orçamento", label: "Transparente" },
];

export default function TrustBar() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(`.${styles.trustItem}`);
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
    <div className={styles.trustBar}>
      <div className="container">
        <div className={styles.trustGrid} ref={containerRef}>
          {items.map((item) => {
            
            const Icon = item.Icon;
            return (
            <div key={item.label} className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <Icon size={30} />
              </div>
              <div>
                <div className={styles.trustNumber}>{item.number}</div>
                <div className={styles.trustLabel}>{item.label}</div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
