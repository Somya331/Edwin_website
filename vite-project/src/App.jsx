import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import TopBar from './components/layout/TopBar';
import FloatingWhatsApp from "./components/common/FloatingWhatsApp";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
        <FloatingWhatsApp />
      </main>
      <Footer />
    </div>
  );
}

export default App;





















