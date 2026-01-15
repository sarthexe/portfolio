import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// ========== ICON COMPONENTS ==========
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const IconPlay = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const IconPrev = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
  </svg>
);

const IconNext = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
  </svg>
);

// Hobby Icons
const IconLanguage = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 8l6 6M4 14l6-6 2-3M2 5h12M7 2v3M22 22l-5-10-5 10M14 18h6" />
  </svg>
);

const IconFootball = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    <path d="M2 12h20" />
  </svg>
);

const IconDesert = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 20H7c-4 0-4-3 0-5 2-1 4-3 5-6 1 3 3 5 5 6 4 2 4 5 0 5z" />
    <circle cx="17" cy="6" r="2" />
    <path d="M17 4v-2M19 6h2M15 6h-2M17 8v2" />
  </svg>
);

const IconMic = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
  </svg>
);

// Life Component Icons
const IconAI = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="3" />
    <path d="M12 8v3M7 15h.01M12 15h.01M17 15h.01" />
  </svg>
);

const IconMusic = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const IconFitness = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6.5 6.5a2.5 2.5 0 0 1 5 0v11a2.5 2.5 0 0 1-5 0zM12.5 6.5a2.5 2.5 0 0 1 5 0v11a2.5 2.5 0 0 1-5 0z" />
    <path d="M3 12h3M18 12h3M9 12h6" />
  </svg>
);

const IconGlobe = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// Section Icons
const IconTarget = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const IconZap = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const IconSparkles = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
    <path d="M5 19l1 3 1-3 3-1-3-1-1-3-1 3-3 1 3 1z" />
  </svg>
);

const IconChart = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
);

const IconFire = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const IconHeadphones = () => (
  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

export default function Personal() {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    setIsExiting(true);
    setTimeout(() => navigate('/'), 800);
  };

  const hobbies = [
    { icon: IconLanguage, title: "Learning Japanese", desc: "日本語を勉強しています！", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { icon: IconFootball, title: "Playing Football", desc: "Weekend warrior on the pitch", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { icon: IconDesert, title: "Dune Enthusiast", desc: "The spice must flow", gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" },
    { icon: IconMic, title: "HipHop & Rap", desc: "Bars over beats", gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" },
  ];

  const lifeComponents = [
    { icon: IconAI, title: "LLMs", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { icon: IconMusic, title: "Music", gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" },
    { icon: IconFitness, title: "Fitness", gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" },
    { icon: IconGlobe, title: "Foreign Language", gradient: "linear-gradient(135deg, #fc4a1a 0%, #f7b733 100%)" },
  ];

  const futurePlans = [
    { text: "Graduation", done: false },
    { text: "Travel Abroad", done: false },
    { text: "Master Guitar", done: false },
    { text: "Go Gym Consistently", done: true },
    { text: "Read 50+ Books", done: false },
    { text: "Learn 3 Languages", done: false },
    { text: "Build AI Startup", done: false },
    { text: "Make Family Proud", done: false },
  ];

  const stats = [
    { label: "Coding Hours", count: "10,000+", gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" },
    { label: "FIFA Win Rate", count: "64%", gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)" },
    { label: "Dune Read count", count: "Caught up", gradient: "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)" },
    { label: "Jap. Level", count: "N5 ⏳", gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)" },
    { label: "Caffeine Lvl", count: "Dangerous", gradient: "linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --bg: #0f0f1a;
          --bg-gradient: linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%);
          --glass: rgba(255, 255, 255, 0.03);
          --glass-border: rgba(255, 255, 255, 0.08);
          --glass-hover: rgba(255, 255, 255, 0.06);
          --text: #ffffff;
          --text-secondary: rgba(255, 255, 255, 0.6);
          --text-muted: rgba(255, 255, 255, 0.4);
          --accent: #8b5cf6;
          --accent-glow: rgba(139, 92, 246, 0.4);
        }

        body {
          font-family: 'Space Grotesk', sans-serif;
          background: var(--bg-gradient);
          background-attachment: fixed;
          color: var(--text);
          min-height: 100vh;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        /* Animated background */
        .bg-orbs {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
          animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
          width: 600px;
          height: 600px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          top: -200px;
          right: -100px;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 400px;
          height: 400px;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          bottom: -100px;
          left: -100px;
          animation-delay: -5s;
        }

        .orb-3 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -10s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -30px) scale(1.05); }
          50% { transform: translate(-20px, 20px) scale(0.95); }
          75% { transform: translate(20px, 10px) scale(1.02); }
        }

        a { color: inherit; text-decoration: none; }

        /* ========== TRANSITION OVERLAY ========== */
        .transition-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 9999;
          pointer-events: none;
          overflow: hidden;
        }

        .entrance-curtain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          transform: translateY(0%);
          animation: curtainSlideDown 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.1s forwards;
        }

        @keyframes curtainSlideDown {
          0% { transform: translateY(0%); }
          100% { transform: translateY(100%); }
        }

        .entrance-top {
          flex: 1;
          background: linear-gradient(180deg, #004d98 0%, #1a5fad 100%);
        }

        .entrance-bottom {
          flex: 1;
          background: linear-gradient(180deg, #8b1538 0%, #a50044 100%);
        }

        .entrance-emoji {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 4rem;
          z-index: 10;
          animation: emojiExit 0.4s ease 0.2s forwards;
        }

        @keyframes emojiExit {
          0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(0.5); }
        }

        .exit-curtain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateY(100%);
          display: flex;
          flex-direction: column;
          opacity: 0;
          visibility: hidden;
        }

        .exiting .exit-curtain {
          opacity: 1;
          visibility: visible;
          animation: curtainSlideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes curtainSlideUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0%); }
        }

        .exit-top {
          flex: 1;
          background: linear-gradient(180deg, #f5f0e8 0%, #faf8f5 100%);
        }

        .exit-bottom {
          flex: 1;
          background: linear-gradient(180deg, #e8e3db 0%, #f5f0e8 100%);
        }

        .exit-emoji {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          font-size: 4rem;
          z-index: 10;
          opacity: 0;
        }

        .exiting .exit-emoji {
          animation: emojiReveal 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        }

        @keyframes emojiReveal {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0) rotate(-180deg); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1) rotate(0deg); }
        }

        /* ========== PAGE CONTENT ========== */
        .personal-page {
          position: relative;
          z-index: 1;
          min-height: 100vh;
          padding: 32px;
          padding-bottom: 100px;
          max-width: 1400px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s, 
                      transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.3s;
        }

        .personal-page.loaded {
          opacity: 1;
          transform: translateY(0);
        }

        .personal-page.exiting {
          opacity: 0;
          transform: scale(0.98);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        /* ========== BOTTOM TAB SWITCHER ========== */
        .tab-switcher {
          position: fixed;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%) translateY(100px);
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px;
          background: rgba(30, 30, 45, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          z-index: 100;
          opacity: 0;
          box-shadow: 0 10px 40px rgba(0,0,0,0.5);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tab-switcher.loaded {
          opacity: 1;
          transform: translateX(-50%) translateY(0);
          transition-delay: 0.5s;
        }

        .tab-switcher.exiting {
          opacity: 0;
          transform: translateX(-50%) translateY(100px);
          transition-delay: 0s;
        }

        .tab-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 100px;
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          color: rgba(255,255,255,0.5);
        }

        .tab-btn:hover {
          color: rgba(255,255,255,0.8);
        }

        .tab-btn.active {
          background: linear-gradient(135deg, #10b981 0%, #34d399 100%);
          color: white;
          box-shadow: 0 4px 15px rgba(16, 185, 129, 0.4);
        }

        .tab-btn.active:hover {
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.5);
          transform: scale(1.02);
        }

        /* ========== BENTO GRID ========== */
        .bento {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: minmax(60px, auto);
          gap: 20px;
        }

        .card {
          background: var(--glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          border: 1px solid var(--glass-border);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0;
          transform: translateY(30px);
          position: relative;
          overflow: hidden;
        }

        .card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
        }

        .loaded .card {
          opacity: 1;
          transform: translateY(0);
        }

        .loaded .card:nth-child(1) { transition-delay: 0.05s; }
        .loaded .card:nth-child(2) { transition-delay: 0.1s; }
        .loaded .card:nth-child(3) { transition-delay: 0.15s; }
        .loaded .card:nth-child(4) { transition-delay: 0.2s; }
        .loaded .card:nth-child(5) { transition-delay: 0.25s; }
        .loaded .card:nth-child(6) { transition-delay: 0.3s; }
        .loaded .card:nth-child(7) { transition-delay: 0.35s; }

        .card:hover {
          transform: translateY(-6px);
          background: var(--glass-hover);
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                      0 0 0 1px rgba(255,255,255,0.05);
        }

        /* ========== HEADER ========== */
        .header-card {
          grid-column: span 12;
          grid-row: span 2;
          text-align: center;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
          position: relative;
        }

        .header-glow {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .header-icon {
          margin-bottom: 20px;
          position: relative;
          z-index: 1;
          animation: pulse 2s ease-in-out infinite;
          color: var(--accent);
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .header-card h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          margin-bottom: 12px;
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
          z-index: 1;
          letter-spacing: -0.02em;
        }

        .header-card p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          position: relative;
          z-index: 1;
        }

        /* ========== SECTION TITLE ========== */
        .section-title {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: var(--text-muted);
          margin-bottom: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .section-icon {
          font-size: 1rem;
        }

        /* ========== HOBBIES ========== */
        .hobbies-card {
          grid-column: span 6;
          grid-row: span 3;
        }

        .hobbies-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          flex: 1;
        }

        .hobby-item {
          background: rgba(255,255,255,0.02);
          border-radius: 16px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .hobby-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--hobby-gradient);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .hobby-item:hover::before {
          opacity: 0.1;
        }

        .hobby-item:hover {
          border-color: rgba(255,255,255,0.1);
          transform: scale(1.02);
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.3);
        }

        .hobby-icon {
          position: relative;
          z-index: 1;
          color: rgba(255,255,255,0.8);
        }

        .hobby-title {
          font-size: 0.95rem;
          font-weight: 600;
          position: relative;
          z-index: 1;
        }

        .hobby-desc {
          font-size: 0.75rem;
          color: var(--text-secondary);
          position: relative;
          z-index: 1;
        }

        /* ========== LIFE COMPONENTS ========== */
        .life-card {
          grid-column: span 6;
          grid-row: span 3;
        }

        .life-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          flex: 1;
        }

        .life-item {
          border-radius: 16px;
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          background: var(--life-gradient);
        }

        .life-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0,0,0,0.3);
          transition: opacity 0.3s ease;
        }

        .life-item:hover::before {
          opacity: 0;
        }

        .life-item:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
        }

        .life-emoji {
          font-size: 2.5rem;
          position: relative;
          z-index: 1;
        }

        .life-title {
          font-size: 0.85rem;
          font-weight: 600;
          text-align: center;
          position: relative;
          z-index: 1;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* ========== DAILY ROUTINE ========== */
        .routine-card {
          grid-column: span 4;
          grid-row: span 4;
        }

        .routine-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .routine-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
        }

        .routine-list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .routine-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .routine-item:last-child {
          border-bottom: none;
        }

        .routine-time {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--accent);
          min-width: 75px;
        }

        .routine-activity {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        /* ========== FUTURE PLAN ========== */
        .plan-card {
          grid-column: span 4;
          grid-row: span 4;
        }

        .plan-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .plan-count {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 100px;
        }

        .plan-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .plan-item {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 0.875rem;
          color: var(--text-secondary);
          padding: 8px 0;
          transition: all 0.2s ease;
        }

        .plan-item:hover {
          color: var(--text);
        }

        .plan-check {
          width: 20px;
          height: 20px;
          border-radius: 6px;
          border: 2px solid rgba(255,255,255,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .plan-check.done {
          background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
          border-color: transparent;
          color: white;
        }

        /* ========== MUSIC PLAYER ========== */
        .music-card {
          grid-column: span 4;
          grid-row: span 4;
          background: linear-gradient(180deg, rgba(102, 126, 234, 0.08) 0%, rgba(118, 75, 162, 0.08) 100%);
        }



        /* ========== STATS ========== */
        .stats-card {
          grid-column: span 4;
          grid-row: span 4;
        }

        .stats-grid {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .stat-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 8px 0;
          transition: all 0.2s ease;
        }

        .stat-item:hover {
          transform: translateX(4px);
        }

        .stat-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--stat-gradient);
          box-shadow: 0 0 10px var(--stat-gradient);
        }

        .stat-content {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.875rem;
        }

        .stat-label {
          color: var(--text-secondary);
        }

        .stat-count {
          font-family: 'JetBrains Mono', 'SF Mono', monospace;
          font-weight: 600;
          color: var(--text);
        }

        /* ========== FOOTER ========== */
        .footer-card {
          grid-column: span 12;
          grid-row: span 1;
          text-align: center;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          gap: 12px;
          padding: 24px;
          background: linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.05) 100%);
        }

        .footer-text {
          font-size: 1rem;
          color: var(--text-secondary);
        }

        .footer-emoji {
          font-size: 1.5rem;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 1024px) {
          .hobbies-card, .life-card { grid-column: span 6; }
          .routine-card, .plan-card, .music-card, .stats-card { grid-column: span 6; grid-row: span 3; }
        }

        @media (max-width: 768px) {
          .personal-page { padding: 16px; }
          .bento { gap: 14px; }
          .hobbies-card, .life-card, .routine-card, .plan-card, .music-card, .stats-card { 
            grid-column: span 12; 
          }
          .hobbies-grid, .life-grid {
            grid-template-columns: 1fr 1fr;
          }
          .stats-card {
            grid-row: span 2;
          }
          .stats-grid {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .hobbies-grid, .life-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Animated Background Orbs */}
      <div className="bg-orbs">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Transition Overlay */}
      <div className={`transition-overlay ${isExiting ? 'exiting' : ''}`}>
        <div className="entrance-curtain">
          <div className="entrance-top"></div>
          <div className="entrance-bottom"></div>
          <div className="entrance-emoji">⚽</div>
        </div>
        <div className="exit-curtain">
          <div className="exit-top"></div>
          <div className="exit-bottom"></div>
          <div className="exit-emoji">💻</div>
        </div>
      </div>

      <div className={`personal-page ${isLoaded ? 'loaded' : ''} ${isExiting ? 'exiting' : ''}`}>
        <div className="bento">
          {/* Header */}
          <div className="card header-card">
            <div className="header-glow"></div>
            <div className="header-icon"><IconFire /></div>
            <h1>Beyond the Code</h1>
            <p>When I'm not training models, here's what keeps me going...</p>
          </div>

          {/* Hobbies */}
          <div className="card hobbies-card">
            <div className="section-title">
              <span className="section-icon"><IconTarget /></span>
              Hobbies
            </div>
            <div className="hobbies-grid">
              {hobbies.map((hobby, i) => (
                <div
                  key={i}
                  className="hobby-item"
                  style={{ '--hobby-gradient': hobby.gradient }}
                >
                  <span className="hobby-icon"><hobby.icon /></span>
                  <span className="hobby-title">{hobby.title}</span>
                  <span className="hobby-desc">{hobby.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Life Components */}
          <div className="card life-card">
            <div className="section-title">
              <span className="section-icon"><IconZap /></span>
              Components of Sarthak's Life
            </div>
            <div className="life-grid">
              {lifeComponents.map((item, i) => (
                <div
                  key={i}
                  className="life-item"
                  style={{ '--life-gradient': item.gradient }}
                >
                  <span className="life-icon"><item.icon /></span>
                  <span className="life-title">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Future Plan */}
          <div className="card plan-card">
            <div className="plan-header">
              <div className="section-title" style={{ marginBottom: 0 }}>
                <span className="section-icon"><IconSparkles /></span>
                Future plan
              </div>
              <span className="plan-count">{futurePlans.length}</span>
            </div>
            <div className="plan-list">
              {futurePlans.map((item, i) => (
                <div key={i} className={`plan-item ${item.done ? 'done' : ''}`}>
                  <div className={`plan-check ${item.done ? 'done' : ''}`}>
                    {item.done && <IconCheck />}
                  </div>
                  <span className="plan-text">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Spotify Widget */}
          <div className="card music-card" style={{ padding: 0, overflow: 'hidden' }}>
            <iframe style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/playlist/3bV7nEQh7CCPxBJYP1Mr12?utm_source=generator&theme=0"
              width="100%"
              height="100%"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Spotify"
            ></iframe>
          </div>

          {/* Stats */}
          <div className="card stats-card">
            <div className="section-title">
              <span className="section-icon"><IconChart /></span>
              Life Stats
            </div>
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={i} className="stat-item" style={{ '--stat-gradient': stat.gradient }}>
                  <div className="stat-dot"></div>
                  <div className="stat-content">
                    <span className="stat-label">{stat.label}</span>
                    <span className="stat-count">{stat.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="card footer-card">
            <span className="footer-icon"><IconZap /></span>
            <p className="footer-text">Life's too short to just code all day!</p>
          </div>
        </div>

      </div>

      {/* Tab Switcher - fixed at bottom */}
      <div className={`tab-switcher ${isLoaded ? 'loaded' : ''} ${isExiting ? 'exiting' : ''}`}>
        <button className="tab-btn" onClick={handleBack}>
          Professional
        </button>
        <button className="tab-btn active">
          Personal
        </button>
      </div>
    </>
  );
}
