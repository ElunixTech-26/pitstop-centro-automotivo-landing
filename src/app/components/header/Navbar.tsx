import Link from "next/link";
import { WhatsAppIcon } from "../icons";
import styles from "./Navbar.module.css";
import { WHATSAPP_URL } from "@/app/lib/constants";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.navInner}`}>
        <div className={styles.logo}>
          <span className={styles.logoDot} />
          PIT STOP
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="#servicos">Serviços</Link>
          </li>
          <li>
            <Link href="#diferenciais">Diferenciais</Link>
          </li>
          <li>
            <Link href="#depoimentos">Depoimentos</Link>
          </li>
          <li>
            <Link href="#sobre">Sobre</Link>
          </li>
        </ul>
        <a
          href={WHATSAPP_URL}
          aria-label="Falar no WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-primary ${styles.navCta}`}>
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </nav>
  );
}
