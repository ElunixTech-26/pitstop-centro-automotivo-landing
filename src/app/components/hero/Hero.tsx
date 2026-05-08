import Link from "next/link";
import {  WhatsAppIcon } from "../icons";
import styles from "./Hero.module.css";
import { ArrowRight, Layers } from "react-bootstrap-icons";
import { WHATSAPP_URL } from "@/app/lib/constants";

export default function Hero() {
  return (
    <main className={styles.hero}>
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroContent}>
          <span className="kicker">Canoas / RS — Desde 1983</span>
          <h1 className={styles.heroTitle}>
            Seu Carro Merece <span className={styles.lineAccent}>Mãos Especialistas</span>
          </h1>
          <p className={styles.lead}>
            Centro automotivo em Canoas desde 1983. Mecânica geral, suspensão, freios, alinhamento e troca de pneus para carros nacionais e importados, com diagnóstico preciso e orçamento transparente.
          </p>
          <div className={styles.heroCtas}>
            <a   
              href={WHATSAPP_URL}
              aria-label="Falar no WhatsApp"
              target="_blank"
              rel="noopener noreferrer" className="btn btn-primary">
              <WhatsAppIcon width={18} height={18} />
              Falar no WhatsApp
            </a>
            <Link href="#servicos" className="btn btn-ghost">
              Ver Serviços
              <ArrowRight />
            </Link>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.heroImage} />
          <div className={styles.heroBadge}>
            <div className={styles.heroBadgeIcon}>
              <Layers className={styles.stackIcon} />
            </div>
            <div className={styles.heroBadgeText}>
              <strong>+5.000 veículos</strong>
              <span>atendidos com excelência técnica</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
