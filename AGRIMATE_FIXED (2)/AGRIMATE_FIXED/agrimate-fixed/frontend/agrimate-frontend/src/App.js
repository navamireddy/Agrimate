import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from './services/authService';
import AIBot from "./pages/AIBot";

// Layout components
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';

// Pages
import Login            from './pages/Login';
import Signup           from './pages/Signup';
import Home             from './pages/Home';
import Weather          from './pages/Weather';
import SoilAnalysis     from './pages/SoilAnalysis';
import Market           from './pages/Market';
import DiseaseDetection from './pages/DiseaseDetection';

/**
 * Protected route wrapper — redirects to /login if not authenticated.
 */
function PrivateRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
}

/**
 * Auth route wrapper — redirects to dashboard if already logged in.
 */
function AuthRoute({ children }) {
  return isAuthenticated() ? <Navigate to="/" replace /> : children;
}

/**
 * Main app layout (sidebar + content) for authenticated pages.
 */
function AppLayout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="app-main">
        <main className="app-content">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Public routes ───────────────────────── */}
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Login />
            </AuthRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthRoute>
              <Signup />
            </AuthRoute>
          }
        />

        {/* ── Protected routes ────────────────────── */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <AppLayout>
                <Home />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/weather"
          element={
            <PrivateRoute>
              <AppLayout>
                <Weather />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/soil"
          element={
            <PrivateRoute>
              <AppLayout>
                <SoilAnalysis />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/market"
          element={
            <PrivateRoute>
              <AppLayout>
                <Market />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/disease"
          element={
            <PrivateRoute>
              <AppLayout>
                <DiseaseDetection />
              </AppLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/aibot"
          element={
            <PrivateRoute>
              <AppLayout>
                <AIBot />
              </AppLayout>
           </PrivateRoute>
         }
        />

        {/* ── Catch-all ───────────────────────────── */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
