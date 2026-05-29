"use client";

import { useEffect, useRef } from "react";
import styles from "./Faq.module.css";
import { Plus } from "react-bootstrap-icons";

const faqs = [
  {
    question: "Quanto tempo demora um alinhamento e balanceamento?",
    answer:
      "Em média 40 minutos pros dois juntos. Se você vier pelo WhatsApp antes, a gente já deixa separado e te atende no horário combinado, sem precisar ficar esperando.",
  },
  {
    question: "Vocês fazem orçamento na hora? Cobra alguma coisa?",
    answer:
      "Sim, e é de graça, sem compromisso nenhum. Você olha o que foi encontrado, decide se fecha ou não, e só paga quando o serviço estiver pronto e aprovado por você.",
  },
  {
    question: "E se aparecer alguma coisa a mais durante o serviço?",
    answer:
      "A gente para tudo e te liga antes de fazer qualquer coisa. Explica o que foi encontrado, passa o valor, e só segue com a sua aprovação. Nada é feito fora do combinado.",
  },
  {
    question: "Atendem carros importados?",
    answer:
      "Sim. Trabalhamos com nacionais e importados europeus, asiáticos, americanos. Temos scanner multimarca e equipe acostumada com os sistemas eletrônicos mais modernos.",
  },
  {
    question: "Qual a região de atendimento?",
    answer:
      "Atendemos toda a Grande Porto Alegre: Canoas, Esteio, Cachoeirinha, Sapucaia do Sul, Nova Santa Rita, Gravataí e zona norte da capital. A oficina fica na Av. Getúlio Vargas, 6600 — Canoas/RS.",
  },
  {
    question: "Preciso agendar ou posso só aparecer?",
    answer:
      "Pode aparecer sem avisar, a gente atende. Mas pelo WhatsApp é melhor: você garante o horário, evita espera e, se precisar de peça, já deixamos separado com antecedência.",
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
