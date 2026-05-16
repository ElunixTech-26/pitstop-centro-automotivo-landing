"use client";

import { useEffect, useRef } from "react";
import styles from "./Faq.module.css";
import { Plus } from "react-bootstrap-icons";

const faqs = [
  {
    question: "Quanto tempo demora um alinhamento e balanceamento?",
    answer:
      "Em média 40 minutos para alinhamento e balanceamento completos. Se você nos chamar pelo WhatsApp antes de vir, deixamos tudo preparado para atender no horário marcado, sem fila.",
  },
  {
    question: "Vocês fazem orçamento na hora? Cobra alguma coisa?",
    answer:
      "Sim, o orçamento é feito na hora e é totalmente gratuito, sem compromisso. Você só fecha o serviço se quiser, e só pagamos quando o trabalho estiver concluído e aprovado por você.",
  },
  {
    question: "E se eu fechar o orçamento e descobrirem que precisa mais coisa?",
    answer:
      "Nunca executamos um serviço fora do orçamento sem te avisar. Se durante o reparo identificarmos algo a mais, paramos, te ligamos, explicamos o que foi encontrado e só seguimos com sua autorização. Sem surpresa na hora de pagar.",
  },
  {
    question: "Atendem carros importados?",
    answer:
      "Sim. Trabalhamos com veículos nacionais e importados — europeus, asiáticos e americanos — com scanner multimarca compatível e equipe treinada para diagnóstico em sistemas eletrônicos modernos.",
  },
  {
    question: "Qual a região de atendimento?",
    answer:
      "Atendemos toda a região metropolitana de Porto Alegre: Canoas, Esteio, Cachoeirinha, Sapucaia do Sul, Nova Santa Rita, Gravataí e zona norte da capital. Nossa oficina fica na Av. Getúlio Vargas, 6600 — Canoas/RS.",
  },
  {
    question: "Como faço pra agendar? Posso só aparecer?",
    answer:
      "Você pode chegar a qualquer momento no horário de funcionamento, mas o agendamento via WhatsApp é mais rápido: garantimos seu horário, evitamos espera e já separamos as peças se for o caso.",
  },
];

export default function Faq() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = containerRef.current?.querySelectorAll(`.${styles.faqItem}`);
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
    <section id="faq" className="section-alt">
      <div className="container">
        <span className="kicker">Perguntas Frequentes</span>
        <h2 className="section-title">
          Tire Suas <span className="accent">Dúvidas</span>
        </h2>
        <p className={styles.faqLead}>
          As perguntas que mais ouvimos antes de cada serviço, respondidas com clareza e sem
          enrolação.
        </p>

        <div className={styles.faqList} ref={containerRef}>
          {faqs.map(({ question, answer }, index) => (
            <details
              key={question}
              className={styles.faqItem}
            >
              <summary className={styles.faqQuestion}>
                <span className={styles.faqQuestionText}>{question}</span>
                <span className={styles.faqIcon} aria-hidden="true">
                  <Plus />
                </span>
              </summary>
              <div className={styles.faqAnswerWrap}>
                <p className={styles.faqAnswer}>{answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
