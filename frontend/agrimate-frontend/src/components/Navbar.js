import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout, getUser } from '../services/authService';
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const navigate = useNavigate();
  const user = getUser();
  const { t } = useTranslation();

  const NAV_ITEMS = [
    { to: '/',        icon: '⬡',  label: t("dashboard") },
    { to: '/weather', icon: '🌤',  label: t("checkWeather") },
    { to: '/soil',    icon: '🪱',  label: t("soilAnalysis") },
    { to: '/market',  icon: '📈',  label: t("marketPrices") },
    { to: '/disease', icon: '🔬',  label: t("diseaseDetection") },
    { to: '/aibot', icon: '🤖', label: "AI Assistant" },
  ];

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <aside style={styles.sidebar}>
      
      {/* Logo */}
      <div style={styles.logoArea}>
        <div style={styles.logoMark}>🌱</div>
        <div>
          <div style={styles.logoText}>
            Agri<span style={styles.logoAccent}>Mate</span>
          </div>
          <div style={styles.logoSub}>Smart Farming AI</div>
        </div>
      </div>

      {/* Navigation section */}
      <div style={styles.navSection}>
        <div style={styles.sectionLabel}>{t("navigation")}</div>

        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            style={({ isActive }) => ({
              ...styles.navItem,
              ...(isActive ? styles.navItemActive : {}),
            })}
          >
            <span style={styles.navIcon}>{item.icon}</span>
            <span>{item.label}</span>
            {({ isActive }) => isActive && <span style={styles.activeDot} />}
          </NavLink>
        ))}
      </div>

      {/* Bottom user card */}
      <div style={styles.userArea}>
        <div style={styles.userCard}>
          <div style={styles.userAvatar}>
            {user?.name?.charAt(0)?.toUpperCase() || 'F'}
          </div>

          <div style={styles.userInfo}>
            <div style={styles.userName}>
              {user?.name || t("farmer")}
            </div>
            <div style={styles.userEmail}>
              {user?.email || ''}
            </div>
          </div>
        </div>

        <button style={styles.logoutBtn} onClick={handleLogout}>
          <span>⏏</span> {t("signOut")}
        </button>
      </div>
    </aside>
  );
}

const styles = {
  sidebar: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: 'var(--sidebar-w)',
    height: '100vh',
    background: 'linear-gradient(175deg, #162e14 0%, #1C3A1A 50%, #1a2e0e 100%)',
    display: 'flex',
    flexDirection: 'column',
    zIndex: 100,
    borderRight: '1px solid rgba(255,255,255,0.06)',
    overflowY: 'auto',
  },

  logoArea: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '28px 20px 22px',
    borderBottom: '1px solid rgba(255,255,255,0.07)',
  },

  logoMark: {
    fontSize: 28,
    lineHeight: 1,
  },

  logoText: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 22,
    fontWeight: 700,
    color: '#F5ECD8',
    letterSpacing: '-0.3px',
  },

  logoAccent: {
    color: '#E8B84B',
  },

  logoSub: {
    fontSize: 10,
    color: 'rgba(245,236,216,0.4)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginTop: 2,
  },

  navSection: {
    padding: '22px 12px 16px',
    flex: 1,
  },

  sectionLabel: {
    fontSize: 9.5,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
    color: 'rgba(255,255,255,0.28)',
    padding: '0 10px',
    marginBottom: 10,
  },

  navItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 12px',
    borderRadius: 10,
    color: 'rgba(245,236,216,0.55)',
    fontSize: 13.5,
    fontWeight: 500,
    marginBottom: 3,
    transition: 'all 0.18s',
    textDecoration: 'none',
    position: 'relative',
  },

  navItemActive: {
    background: 'linear-gradient(130deg, rgba(74,140,71,0.28), rgba(125,189,121,0.14))',
    color: '#7DBD79',
    border: '1px solid rgba(74,140,71,0.22)',
  },

  navIcon: {
    fontSize: 16,
    width: 22,
    textAlign: 'center',
    flexShrink: 0,
  },

  activeDot: {
    marginLeft: 'auto',
    width: 6,
    height: 6,
    borderRadius: '50%',
    background: '#7DBD79',
  },

  userArea: {
    padding: '0 12px 20px',
    marginTop: 'auto',
  },

  userCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: 10,
    border: '1px solid rgba(255,255,255,0.08)',
    marginBottom: 8,
  },

  userAvatar: {
    width: 34,
    height: 34,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #4A8C47, #7DBD79)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 700,
    color: 'white',
    flexShrink: 0,
  },

  userInfo: {
    overflow: 'hidden',
  },

  userName: {
    fontSize: 13,
    fontWeight: 600,
    color: '#F5ECD8',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  userEmail: {
    fontSize: 11,
    color: 'rgba(245,236,216,0.38)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  logoutBtn: {
    width: '100%',
    padding: '8px',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.09)',
    borderRadius: 8,
    color: 'rgba(245,236,216,0.5)',
    fontSize: 12,
    fontWeight: 500,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    transition: 'all 0.2s',
    fontFamily: "'DM Sans', sans-serif",
  },
};
