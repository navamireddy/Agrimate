import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <span style={styles.brand}>
          🌱 <strong>AgriMate</strong>
        </span>
        <span style={styles.copy}>
          © {year} Smart Farming Intelligence — All rights reserved
        </span>
        <span style={styles.version}>v1.0.0</span>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    borderTop: '1px solid var(--border)',
    background: 'var(--paper)',
    padding: '16px 44px',
    marginTop: 'auto',
  },
  inner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
    maxWidth: 1200,
  },
  brand: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 13,
    color: 'var(--forest)',
    display: 'flex',
    alignItems: 'center',
    gap: 6,
  },
  copy: {
    fontSize: 12,
    color: 'var(--dust)',
    textAlign: 'center',
  },
  version: {
    fontSize: 11,
    color: 'var(--dust)',
    background: 'var(--linen)',
    padding: '2px 8px',
    borderRadius: 20,
    fontWeight: 500,
  },
};
