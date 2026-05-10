"use client"; // Importante para usar Framer Motion no App Router

import { motion } from "framer-motion"; // Importe o motion completo
import Titulo from "@/components/titulo";
import Galeria from "@/components/galeria";
import Equipe from "@/components/equipe";
import Rodape from "@/components/rodape";

export default function Home() {
  return (
    <main>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Titulo />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Galeria />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Equipe />
      </motion.section>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <Rodape />
      </motion.section>
    </main>
  );
}
