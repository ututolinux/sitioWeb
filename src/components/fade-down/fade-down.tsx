'use client';

import { motion } from 'framer-motion';

export function FadeDown() {
  const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' } },
  };
  return (
    <motion.div
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="space-y-2"
    >
      <motion.h1
        className="bg-gradient-to-br from-primary to-foreground/80 bg-clip-text text-3xl font-bold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none"
        variants={FADE_DOWN_ANIMATION_VARIANTS}
      >
        Ututo: Optimizado, innovador, histórico y de software libre
      </motion.h1>
      <motion.p className="max-w-[600px] text-muted-foreground md:text-xl" variants={FADE_DOWN_ANIMATION_VARIANTS}>
        Descubrí Ututo, la evolución de GNU/Linux, donde cada elemento es completamente libre. Originaria de Argentina,
        y dedicada a usuarios que anhelan transparencia y control total, Ututo es un puente hacia una computación más
        ética. Con Ututo, disfrutá de una tecnología que respeta tu libertad, y fomenta una comunidad comprometida con
        el avance del software libre. Emprendé tu viaje hacia la soberanía digital ahora.
      </motion.p>
    </motion.div>
  );
}
