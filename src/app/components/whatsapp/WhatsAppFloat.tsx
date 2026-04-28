import { WHATSAPP_URL } from "../../lib/constants";
import { WhatsAppIcon } from "../icons";
import styles from "./WhatsAppFloat.module.css";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      className={styles.whatsappFloat}
      aria-label="Falar no WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsAppIcon width={30} height={30} fill="#fff" />
    </a>
  );
}
