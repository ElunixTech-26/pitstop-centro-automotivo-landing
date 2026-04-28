import {  WhatsAppIcon } from "../icons";
import styles from "./FinalCta.module.css";
import { SITE_CONFIG, WHATSAPP_URL } from "../../lib/constants";
import { Clock, Map, Phone } from "react-bootstrap-icons";

export default function FinalCta() {
  return (
    <section id="cta" className={styles.finalCta}>
      <div className={`container ${styles.finalCtaInner}`}>
        <div>
          <h2 className={styles.finalCtaTitle}>Pronto para Agendar Seu Serviço?</h2>
          <p className={styles.finalCtaText}>
            Fale agora mesmo com nossa equipe pelo WhatsApp. Orçamento rápido, atendimento humano
            e sem enrolação.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <a
            href={WHATSAPP_URL}
            className={styles.btnDark}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon width={22} height={22} fill="#25D366" />
            Chamar no WhatsApp
          </a>
          <div className={styles.ctaInfo}>
            <div className={styles.ctaInfoItem}>
              <Phone />
              {SITE_CONFIG.phone}
            </div>
            <div className={styles.ctaInfoItem}>
              <Map width={18} height={18} />
              {SITE_CONFIG.location}
            </div>
            <div className={styles.ctaInfoItem}>
              <Clock width={18} height={18} strokeWidth={2.2} />
              {SITE_CONFIG.hours}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
