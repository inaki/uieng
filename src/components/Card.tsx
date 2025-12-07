import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type Props = {
  title: string;
  subtitle?: string;
  meta?: string;
  metaLines?: {
    line1: string;
    line2: string;
  };
  children?: ReactNode;
  className?: string;
  dataTestId?: string;
};

export const Card = ({
  title,
  subtitle,
  meta,
  metaLines,
  children,
  className,
  dataTestId,
}: Props) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      data-testid={
        dataTestId ??
        `card-${title
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '')}`
      }
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
        {(metaLines || meta) && (
          <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-wide text-lemon">
            {metaLines ? (
              <span className="flex flex-col leading-tight text-right">
                <span className="whitespace-nowrap">{metaLines.line1}</span>
                <span className="whitespace-nowrap">{metaLines.line2}</span>
              </span>
            ) : (
              meta
            )}
          </span>
        )}
      </div>
      {children && <div className="mt-3 text-sm text-ink/80">{children}</div>}
    </motion.article>
  );
};
