import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type Props = {
  title: string;
  subtitle?: string;
  meta?: string;
  children?: ReactNode;
  className?: string;
};

export const Card = ({ title, subtitle, meta, children, className }: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={clsx(
        'relative overflow-hidden rounded-funky border border-ink/15 bg-white/90 p-5 shadow-card',
        'before:pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/60 before:via-white/0 before:to-mint/20',
        className
      )}
    >
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          {subtitle && <p className="text-sm text-ink/70">{subtitle}</p>}
        </div>
        {meta && (
          <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lemon">
            {meta}
          </span>
        )}
      </div>
      {children && <div className="mt-3 text-sm text-ink/80">{children}</div>}
    </motion.article>
  );
};
