import React from 'react';

/**
 * Page-level header component with title, subtitle, and optional right slot.
 * @param {{ eyebrow?: string, title: string, subtitle?: string, children?: React.ReactNode }} props
 */
export default function Header({ eyebrow, title, subtitle, children }) {
  return (
    <header style={styles.header}>
      <div style={styles.textGroup}>
        {eyebrow && <p style={styles.eyebrow}>{eyebrow}</p>}
        <h1 style={styles.title}>{title}</h1>
        {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
      </div>
      {children && <div style={styles.actions}>{children}</div>}
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 36,
    gap: 20,
  },
  textGroup: {
    flex: 1,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: 'var(--leaf)',
    marginBottom: 6,
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 32,
    fontWeight: 700,
    color: 'var(--forest)',
    lineHeight: 1.15,
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontSize: 14,
    color: 'var(--text-muted)',
    marginTop: 6,
    lineHeight: 1.6,
    maxWidth: 500,
  },
  actions: {
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    paddingTop: 4,
  },
};
