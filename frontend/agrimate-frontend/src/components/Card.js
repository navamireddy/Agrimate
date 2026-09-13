import React from 'react';

/**
 * Generic card component used for crop info, market prices, etc.
 *
 * @param {{
 *   title?: string,
 *   accent?: 'green' | 'amber' | 'earth' | 'sky',
 *   icon?: string,
 *   style?: object,
 *   className?: string,
 *   children: React.ReactNode
 * }} props
 */
export default function Card({ title, accent, icon, style = {}, className = '', children }) {
  const accentColors = {
    green: 'linear-gradient(90deg, #2D5A2B, #7DBD79)',
    amber: 'linear-gradient(90deg, #D4873A, #E8B84B)',
    earth: 'linear-gradient(90deg, #6B3E1F, #D4873A)',
    sky:   'linear-gradient(90deg, #4a90b8, #7ec8e3)',
  };

  return (
    <div
      className={`card ${className}`}
      style={{
        ...style,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Color accent bar */}
      {accent && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: accentColors[accent] || accentColors.green,
          }}
        />
      )}

      {/* Card header */}
      {(title || icon) && (
        <div style={styles.cardHeader}>
          {icon && <span style={styles.icon}>{icon}</span>}
          {title && <h3 className="card__title" style={{ margin: 0 }}>{title}</h3>}
        </div>
      )}

      {children}
    </div>
  );
}

/**
 * Stat card variant for dashboard metrics.
 */
export function StatCard({ label, value, unit, icon, accent, trend }) {
  const trendColor = trend === 'up' ? '#1e6b1e' : trend === 'down' ? '#922b21' : 'var(--stone)';
  const trendIcon  = trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→';

  return (
    <Card accent={accent} style={{ padding: '22px 24px' }}>
      <div style={styles.statTop}>
        {icon && <span style={styles.statIcon}>{icon}</span>}
        {trend && (
          <span style={{ ...styles.trendBadge, color: trendColor }}>
            {trendIcon} {trend}
          </span>
        )}
      </div>
      <div style={styles.statValue}>
        {value}
        {unit && <span style={styles.statUnit}>{unit}</span>}
      </div>
      <div style={styles.statLabel}>{label}</div>
    </Card>
  );
}

const styles = {
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    marginBottom: 18,
  },
  icon: {
    fontSize: 20,
  },
  statTop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statIcon: {
    fontSize: 24,
  },
  trendBadge: {
    fontSize: 11.5,
    fontWeight: 600,
    padding: '2px 8px',
    borderRadius: 20,
    background: 'var(--linen)',
  },
  statValue: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 30,
    fontWeight: 700,
    color: 'var(--forest)',
    lineHeight: 1,
    display: 'flex',
    alignItems: 'baseline',
    gap: 4,
  },
  statUnit: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: 14,
    fontWeight: 400,
    color: 'var(--stone)',
  },
  statLabel: {
    fontSize: 12,
    color: 'var(--text-muted)',
    marginTop: 6,
    fontWeight: 500,
  },
};
