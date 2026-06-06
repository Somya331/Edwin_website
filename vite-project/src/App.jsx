import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import TopBar from './components/layout/TopBar';
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import SEOManager from "./components/common/SEOManager";
import './App.css';
import RedirectHandler from "./RedirectHandler";

function App() {
  return (
    <div className="app-container">
      <SEOManager />
      <TopBar />
      <Navbar />
      <main>
        <Suspense fallback={
          <div style={{
            display: 'flex',
            minHeight: '60vh',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EEF5FF',
            color: '#082B63',
            fontSize: '1.25rem',
            fontWeight: '600',
            fontFamily: "sans-serif"
          }}>
            Loading...
          </div>
        }>
          <RedirectHandler />
          <Outlet />
        </Suspense>
        <FloatingWhatsApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;





















