import { Map } from "react-bootstrap-icons";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="sobre" className="section-alt">
      <div className="container">
        <div className={styles.aboutGrid}>
          <div className={styles.aboutText}>
            <span className="kicker">Sobre a Pit Stop</span>
            <h2 className={styles.aboutTitle}>
              Paixão Que <span className="accent">Movimenta</span>
            </h2>
            <p className={styles.aboutPara}>
              Nascemos em Canoas com um propósito simples: tratar o carro do cliente como se fosse
              nosso. Aqui, cada diagnóstico é feito com atenção, cada peça é escolhida com critério,
              e cada reparo é entregue com a certeza de que fizemos o melhor trabalho possível.
            </p>
            <p className={styles.aboutPara}>
              Somos uma equipe apaixonada por carros, do popular ao importado, e essa paixão
              reflete na qualidade do serviço. Porque quando você confia em alguém com seu carro,
              você confia com sua segurança.
            </p>

            <div className={styles.aboutStats}>
              <div>
                <div className={styles.aboutStatNum}>+5000</div>
                <div className={styles.aboutStatLabel}>Carros Atendidos</div>
              </div>
              <div>
                <div className={styles.aboutStatNum}>98%</div>
                <div className={styles.aboutStatLabel}>Clientes Satisfeitos</div>
              </div>
            </div>
          </div>

          <div className={styles.aboutVisual}>
            <div className={styles.aboutImage} />
            <div className={styles.aboutMap}>
              <div className={styles.mapIcon}>
                <Map />
              </div>
              <div className={styles.mapText}>
                <strong>Canoas — RS</strong>
                <span>Fácil acesso, Av. Getúlio Vargas, 6600 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
