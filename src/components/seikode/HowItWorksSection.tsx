"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Você fala com a gente no WhatsApp",
    description:
      "A gente entende seu negócio, seu nicho e o que você precisa. Sem reunião de 1 hora, sem proposta de 20 páginas.",
  },
  {
    number: "02",
    title: "A gente entrega o site em poucos dias",
    description:
      "Você manda os textos e fotos. Em até 7 dias úteis seu site tá no ar, otimizado e pronto pra converter.",
  },
  {
    number: "03",
    title: "Você começa a receber cliente direto no WhatsApp",
    description:
      "O site trabalha pra você 24h, transformando visitante em conversa qualificada — enquanto você atende quem realmente importa.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function HowItWorksSection() {
  return (
    <section className="relative px-6 py-24 overflow-hidden bg-transparent">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,123,255,0.15), transparent)" }}
      />

      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="mb-14 flex flex-col items-center gap-3 text-center"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "#a1a1aa" }}
          >
            Processo
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "#fafafa" }}>
            Como funciona, na prática
          </h2>
          <p className="text-sm leading-relaxed" style={{ color: "#a1a1aa" }}>
            Três passos. Sem complicação.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              className={cn(
                "relative flex flex-col gap-6 rounded-2xl border p-8",
                "overflow-hidden"
              )}
              style={{
                background: "#0b1021",
                borderColor: "rgba(0,123,255,0.2)",
              }}
            >
              {/* Connector line between cards (desktop only) */}
              {index < steps.length - 1 && (
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-3 top-10 z-10 hidden h-px w-6 md:block"
                  style={{ background: "rgba(0,123,255,0.3)" }}
                />
              )}

              {/* Step number */}
              <span
                className="font-mono text-4xl font-bold leading-none"
                style={{ color: "rgba(0,123,255,0.2)" }}
              >
                {step.number}
              </span>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-lg font-bold leading-snug tracking-tight"
                  style={{ color: "#fafafa" }}
                >
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
