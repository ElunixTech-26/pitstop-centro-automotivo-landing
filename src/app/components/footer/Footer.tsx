import Link from "next/link";
import { FacebookIcon, WhatsAppIcon } from "../icons";
import styles from "./Footer.module.css";
import { SITE_CONFIG, WHATSAPP_URL } from "../../lib/constants";
import { Envelope, GeoAlt, Telephone } from "react-bootstrap-icons";
import Image from "next/image";

const servicesLinks = [
  { label: "Suspensão", href: "#servicos" },
  { label: "Freios", href: "#servicos" },
  { label: "Pneus", href: "#servicos" },
  { label: "Alinhamento", href: "#servicos" },
  { label: "Elétrica", href: "#servicos" },
];

const companyLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Contato", href: "#cta" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          <div className={styles.footerBrand}>
            <div className={styles.logo}>
            <Image src={'/graph-image.png'} alt="Pit Stop Centro Automotivo" width={100} height={50}/>
            </div>
            {/* <div className={styles.logo}>
              <span className={styles.logoDot} />
              {SITE_CONFIG.shortName}
            </div> */}
            <p>
              Centro automotivo especializado em veículos nacionais e importados. Qualidade
              técnica, atendimento humano e confiança em cada reparo.
            </p>
          </div>

          <div className={styles.footerCol}>
            <h5>Serviços</h5>
            <ul>
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h5>Empresa</h5>
            <ul>
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h5>Contato</h5>
            <ul>
              <li className="flex items-center gap-2">
                <Telephone />
                <a href={`tel:${SITE_CONFIG.phone}`}>{SITE_CONFIG.phone}</a>
              </li>
              <li className="flex items-center gap-2">
                <Envelope />
                <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
              </li>
              <li className="flex items-center gap-2">
                <GeoAlt />
                <span>{SITE_CONFIG.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <a href="https://elunix.tech/" className={styles.elunixLink}>Developed by Elunix<span>.</span></a>
          <div>
            © {new Date().getFullYear()} {SITE_CONFIG.name} · Todos os direitos reservados
          </div>
          <div className={styles.socials}>
            {/* <a href="#" className={styles.socialLink} aria-label="Instagram">
              <InstagramIcon />
            </a> */}
            <a href="https://www.facebook.com/pitstopcarservice" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a   
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
              <WhatsAppIcon width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
