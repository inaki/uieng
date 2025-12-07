import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  id: string;
  badge: string;
  title: string;
  children: ReactNode;
  dataTestId?: string;
};

export const Section = ({ id, badge, title, children, dataTestId }: Props) => {
  return (
    <section
      id={id}
      data-testid={dataTestId ?? `section-${id}`}
      className="scroll-mt-28 py-14 sm:py-20"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4">
        <div className="flex items-center gap-3">
          <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-lemon">
            {badge}
          </span>
          <div className="h-px flex-1 bg-ink/10" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h2 className="font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
};
