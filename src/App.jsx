<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import profilePic from './elephanta.jpg'
// --- ICONS ---
const IconGithub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const IconLinkedin = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
=======
import React, { useState, useEffect, useRef } from 'react';
import {
  Mail, ExternalLink, Code2, Terminal, Cpu, Globe,
  User, Briefcase, Send, Menu, X, ChevronDown, Moon, Sun,
  MessageSquare, Sparkles, Bot, Loader2, ArrowRight, Layers, Zap, Shield, Check
} from 'lucide-react';

// --- CUSTOM ICONS (Replacing deprecated Lucide brand icons) ---

const Github = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
>>>>>>> e96c803 (Changed the github link for mindfulspace)
  </svg>
);

const IconMail = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

<<<<<<< HEAD
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);
=======
const apiKey = ""; // API Key injected at runtime

const callGemini = async (prompt, systemInstruction = "") => {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    systemInstruction: systemInstruction ? { parts: [{ text: systemInstruction }] } : undefined
  };

  let delay = 1000;
  for (let i = 0; i < 5; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "I couldn't generate a response.";
    } catch (e) {
      if (i === 4) throw e;
      await new Promise(r => setTimeout(r, delay));
      delay *= 2;
    }
  }
};

const useOnScreen = (ref, rootMargin = "0px") => {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { rootMargin, threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, rootMargin]);
  return isIntersecting;
};

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref, "-50px");
  return (
    <div ref={ref} className={`reveal ${isVisible ? 'active' : ''} ${className}`}>
      {children}
    </div>
  );
};

// --- MAIN COMPONENT ---
>>>>>>> e96c803 (Changed the github link for mindfulspace)

export default function Portfolio() {
  const navigate = useNavigate();
  const [time, setTime] = useState(new Date());
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handlePersonalClick = () => {
    setIsTransitioning(true);
    setTimeout(() => navigate('/personal'), 800);
  };

  const projects = [
<<<<<<< HEAD
    { name: "NanoGPT", type: "LLM", desc: "Minimal GPT implementation for text generation from scratch", link: "https://github.com/sarthexe/nano-gpt" },
    { name: "Mental Health MCP", type: "AI Agent", desc: "MCP server for mental health awareness and support chatbot", link: "https://github.com/sarthexe/mental-health-awareness-mcp" },
    { name: "Cloud SLA Predictor", type: "ML Model", desc: "XGBoost-based SLA violation prediction for cloud services", link: "#" },
    { name: "Text Summarizer", type: "Transformer", desc: "Pegasus model for abstractive summarization", link: "https://github.com/sarthexe/text-summarizer" },
    { name: "Smart ATS", type: "NLP Tool", desc: "AI-powered resume screening with keyword extraction", link: "https://github.com/sarthexe/smart-ats" },
    { name: "YouTube Q&A", type: "RAG App", desc: "Ask questions about any YouTube video using RAG", link: "https://github.com/sarthexe/yt_qna" },
    { name: "Sentiment Analysis", type: "NLP", desc: "Deep learning-based sentiment classification model", link: "https://github.com/sarthexe/Sentiment-Analysis-Minor-Project" },

=======
    {
      title: "Mental Health MCP",
      desc: "An AI-driven Model Context Protocol agent designed to provide context-aware mental health support and awareness.",
      tags: ["AI Agents", "Python", "MCP"],
      link: "https://github.com/sarthexe/mindfulspace",
      featured: true
    },
    {
      title: "Smart ATS",
      desc: "Intelligent Applicant Tracking System using NLP to screen resumes and match them against job descriptions effectively.",
      tags: ["NLP", "Streamlit", "Generative AI"],
      link: "https://github.com/sarthexe/smart-ats",
      featured: false
    },
    {
      title: "YouTube Q&A",
      desc: "RAG-based application allowing users to chat with YouTube videos, extracting insights and answers from transcript data.",
      tags: ["RAG", "LangChain", "OpenAI"],
      link: "https://github.com/sarthexe/yt_qna",
      featured: false
    },
    {
      title: "Text Summarizer",
      desc: "Advanced text summarization tool leveraging transformer models to generate concise abstracts from long-form content.",
      tags: ["Transformers", "HuggingFace", "NLP"],
      link: "https://github.com/sarthexe/text-summarizer",
      featured: false
    }
>>>>>>> e96c803 (Changed the github link for mindfulspace)
  ];

  const stack = [
    // AI/ML
    "Python", "PyTorch", "TensorFlow", "LangChain", "OpenAI", "HuggingFace", "RAG", "Transformers",
    // Full Stack
    "React", "Next.js", "Node.js", "FastAPI", "TypeScript",
    // Databases
    "PostgreSQL", "MongoDB", "Redis", "Pinecone",
    // DevOps
    "Docker", "Azure", "Git"
  ];

<<<<<<< HEAD
=======
  // Handlers
  const handleChatSubmit = async (e) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    const userMsg = chatMessage;
    setChatMessage("");
    setChatHistory(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsAiLoading(true);

    const context = `
      Context:
      Name: Sarthak Maurya
      Role: AI Engineer & Machine Learning Specialist
      Skills: ${skills.map(s => s.name).join(', ')}.
      Projects: ${projects.map(p => `${p.title}: ${p.desc}`).join(' | ')}.
      Experience: ${experiences.map(e => `${e.role} at ${e.company}`).join(' | ')}.
      Tone: Professional, concise, confident, like a senior AI engineer.
    `;

    try {
      const aiResponse = await callGemini(userMsg, context);
      setChatHistory(prev => [...prev, { role: 'system', text: aiResponse }]);
    } catch (error) {
      setChatHistory(prev => [...prev, { role: 'system', text: "Connection error." }]);
    } finally {
      setIsAiLoading(false);
    }
  };

  const handleEnhanceMessage = async () => {
    if (!contactMessage.trim()) return;
    setIsEnhancing(true);
    try {
      const systemInstruction = "You are an expert business communication coach. Rewrite the user's message to be professional, concise, and persuasive. Return ONLY the rewritten text. Do not include any explanations, conversational filler, or internal thinking.";
      const prompt = `Rewrite this message: "${contactMessage}"`;
      const enhanced = await callGemini(prompt, systemInstruction);
      const cleanText = enhanced.replace(/^Here is.*?:\s*/i, '').replace(/^"|"$/g, '').trim();
      setContactMessage(cleanText);
    } catch (error) {
      console.error(error);
    } finally {
      setIsEnhancing(false);
    }
  };

  const handleSendInquiry = async () => {
    if (!contactMessage.trim()) return;
    setIsSending(true);

    const subject = encodeURIComponent("Business Inquiry from Portfolio");
    const body = encodeURIComponent(contactMessage);
    const mailtoLink = `mailto:sarthakmaurya04@gmail.com?subject=${subject}&body=${body}`;

    await new Promise(resolve => setTimeout(resolve, 800));

    window.location.href = mailtoLink;

    setIsSending(false);
    setIsSent(true);

    setTimeout(() => {
      setIsSent(false);
      setContactMessage("");
    }, 3000);
  };

>>>>>>> e96c803 (Changed the github link for mindfulspace)
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        :root {
          --cream: #f5f0e8;
          --warm-white: #faf8f5;
          --charcoal: #1a1a1a;
          --gray: #6b6b6b;
          --light-gray: #d4d0c8;
          --accent: #e85d04;
          --accent-light: #fef3e8;
        }

<<<<<<< HEAD
        body {
          font-family: 'Space Grotesk', sans-serif;
          background: var(--cream);
          color: var(--charcoal);
=======
        .theme-dark {
          /* Refined Dark Palette */
          --bg-body: #050505;
          --bg-surface: #121212;
          --bg-glass: rgba(20, 20, 20, 0.8);
          --text-primary: #f5f5f5;
          --text-secondary: #a3a3a3;
          --text-tertiary: #666666;
          --border-subtle: rgba(255, 255, 255, 0.08);
          --border-strong: rgba(255, 255, 255, 0.15);
          --shadow-card: 0 0 0 1px rgba(255,255,255,0.05), 0 4px 20px rgba(0,0,0,0.4); 
          
          --accent-primary: #6366f1;
          --accent-glow: rgba(99, 102, 241, 0.15);
          --gradient-text: linear-gradient(to right, #ffffff, #a5a5a5);
          
          /* Dark mode mouse glow (Indigo) */
          --mouse-glow: rgba(99, 102, 241, 0.15);
        }

        /* --- RESET & BASE --- */
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        html, body {
          width: 100%;
          overflow-x: hidden;
          margin: 0;
          padding: 0;
        }

        .app-wrapper {
          min-height: 100vh;
          width: 100%;
          background-color: var(--bg-body);
          color: var(--text-primary);
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
>>>>>>> e96c803 (Changed the github link for mindfulspace)
          line-height: 1.5;
          -webkit-font-smoothing: antialiased;
        }

        a { color: inherit; text-decoration: none; }

        .portfolio {
          min-height: 100vh;
          padding: 32px;
          max-width: 1400px;
          margin: 0 auto;
        }

        /* Bento Grid Layout */
        .bento {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-auto-rows: minmax(80px, auto);
          gap: 16px;
        }

        .card {
          background: var(--warm-white);
          border-radius: 24px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid rgba(0,0,0,0.04);
        }

        .card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }

        /* Card Positions */
        .hero-card {
          grid-column: span 8;
          grid-row: span 4;
          flex-direction: row;
          align-items: flex-start;
          gap: 32px;
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .hero-image {
          width: 280px;
          height: 280px;
          border-radius: 20px;
          overflow: hidden;
          flex-shrink: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin-top: 20px;
        }

        .hero-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .clock-card {
          grid-column: span 4;
          grid-row: span 2;
          background: var(--charcoal);
          color: white;
          align-items: center;
          justify-content: center;
          text-align: center;
        }


        .clock-time {
          font-family: 'JetBrains Mono', monospace;
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: -0.02em;
        }

        .clock-label {
          font-size: 0.6875rem;
          opacity: 0.5;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-top: 8px;
        }

        .personal-card {
          grid-column: span 4;
          grid-row: span 2;
          background: linear-gradient(135deg, #004d98 0%, #004d98 50%, #a50044 50%, #a50044 100%);
          color: white;
          align-items: center;
          justify-content: center;
          text-align: center;
          cursor: pointer;
        }

        .personal-card:hover {
          transform: translateY(-4px) scale(1.02);
        }

        .personal-emoji {
          font-size: 2rem;
          margin-bottom: 8px;
        }

        .personal-title {
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .personal-hint {
          font-size: 0.6875rem;
          opacity: 0.8;
        }

        .about-card {
          grid-column: span 6;
          grid-row: span 3;
        }

        .stack-card {
          grid-column: span 6;
          grid-row: span 3;
        }

        .project-card {
          grid-column: span 3;
          grid-row: span 2;
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 24px;
        }

        .project-card:hover::before {
          opacity: 0.05;
        }

        .project-card .arrow {
          position: absolute;
          top: 20px;
          right: 20px;
          opacity: 0;
          transform: translate(-8px, 8px);
          transition: all 0.3s ease;
        }

        .project-card:hover .arrow {
          opacity: 1;
          transform: translate(0, 0);
        }

        .experience-card {
          grid-column: span 6;
          grid-row: span 3;
        }

        .connect-card {
          grid-column: span 6;
          grid-row: span 3;
          background: var(--charcoal);
          color: white;
        }

        /* Typography */
        .hero-greeting {
          font-size: 1rem;
          color: var(--gray);
          margin-bottom: 8px;
          font-weight: 500;
        }

        .hero-name {
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 700;
          line-height: 1;
          letter-spacing: -0.04em;
          margin-bottom: 16px;
        }

        .hero-title {
          font-size: 1.25rem;
          color: var(--gray);
          font-weight: 400;
        }

        .hero-title span {
          color: var(--accent);
          font-weight: 600;
        }



        .section-label {
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--gray);
          margin-bottom: 20px;
          font-weight: 600;
        }

        .about-text {
          font-size: 1.125rem;
          line-height: 1.8;
          color: var(--charcoal);
        }

        .stack-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: auto;
        }

        .stack-tag {
          padding: 10px 18px;
          background: var(--cream);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .stack-tag:hover {
          background: var(--charcoal);
          color: white;
        }

        .project-type {
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .project-name {
          font-size: 1.125rem;
          font-weight: 600;
          line-height: 1.3;
          margin-bottom: 6px;
        }

        .project-desc {
          font-size: 0.8rem;
          color: var(--gray);
          line-height: 1.4;
        }

        .project-card.placeholder {
          opacity: 0.5;
          border: 2px dashed var(--light-gray);
          cursor: default;
        }

        .project-card.placeholder:hover {
          transform: none;
          box-shadow: none;
        }

        .exp-desc {
          font-size: 0.8125rem;
          color: var(--gray);
          margin-top: 6px;
          line-height: 1.5;
        }

        .resume-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          background: transparent;
          color: var(--charcoal);
          border: 2px solid var(--charcoal);
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.2s ease;
          margin-top: 24px;
          cursor: pointer;
          text-decoration: none;
        }

        .resume-btn:hover {
          background: var(--charcoal);
          color: white;
        }

        .exp-item {
          padding: 20px 0;
          border-bottom: 1px solid var(--light-gray);
        }

        .exp-item:last-child {
          border-bottom: none;
        }

        .exp-role {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .exp-company {
          font-size: 0.875rem;
          color: var(--gray);
        }

        .exp-date {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.75rem;
          color: var(--gray);
          margin-top: 8px;
        }

        .connect-title {
          font-size: 1.75rem;
          font-weight: 600;
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .connect-text {
          font-size: 0.9375rem;
          opacity: 0.7;
          margin-bottom: 32px;
          line-height: 1.7;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        .social-btn {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .social-btn:hover {
          background: var(--accent);
          transform: scale(1.1);
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 24px;
          background: var(--charcoal);
          color: white;
          border-radius: 100px;
          font-size: 0.875rem;
          font-weight: 600;
          transition: all 0.2s ease;
          margin-top: 24px;
          border: none;
          cursor: pointer;
        }

        .cta-btn:hover {
          background: var(--accent);
          transform: translateX(4px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-card { grid-column: span 12; }
          .clock-card { grid-column: span 6; }
          .personal-card { grid-column: span 6; }
          .about-card { grid-column: span 12; }
          .stack-card { grid-column: span 12; }
          .project-card { grid-column: span 6; }
          .experience-card { grid-column: span 12; }
          .connect-card { grid-column: span 12; }
        }

        @media (max-width: 640px) {
          .portfolio { padding: 16px; }
          .bento { gap: 12px; }
          .card { padding: 24px; border-radius: 20px; }
          .hero-card { flex-direction: column; text-align: center; }
          .hero-card, .clock-card, .personal-card, .project-card { grid-column: span 12; }
          .hero-image { width: 180px; height: 180px; margin-top: 0; }
          .hero-name { font-size: 2.5rem; }
          .cta-btn { align-self: center; }
        }

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

        .transition-curtain {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transform: translateY(100%);
          display: flex;
          flex-direction: column;
        }

        .transition-curtain.active {
          animation: curtainSlideUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        @keyframes curtainSlideUp {
          0% {
            transform: translateY(100%);
          }
          100% {
            transform: translateY(0%);
          }
        }

        .curtain-top {
          flex: 1;
          background: linear-gradient(180deg, #004d98 0%, #1a5fad 100%);
        }

        .curtain-bottom {
          flex: 1;
          background: linear-gradient(180deg, #8b1538 0%, #a50044 100%);
        }

        .curtain-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 4rem;
          opacity: 0;
          z-index: 10;
        }

        .transition-curtain.active .curtain-center {
          animation: emojiReveal 0.5s ease 0.3s forwards;
        }

        @keyframes emojiReveal {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0) rotate(-180deg);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1) rotate(0deg);
          }
        }

        .portfolio {
          transition: opacity 0.3s ease, transform 0.3s ease, filter 0.3s ease;
          padding-bottom: 100px;
        }

        .portfolio.transitioning {
          opacity: 0;
          transform: scale(0.98);
          filter: blur(4px);
        }

        /* ========== BOTTOM TAB SWITCHER ========== */
        .tab-switcher {
          position: fixed;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 6px;
          background: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 100px;
          z-index: 100;
          box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        }

        .tab-btn {
          padding: 12px 24px;
          border: none;
          border-radius: 100px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
          color: var(--gray);
        }

        .tab-btn:hover {
          color: var(--charcoal);
        }

        .tab-btn.active {
          background: var(--charcoal);
          color: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .tab-btn.active:hover {
          box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          transform: scale(1.02);
        }

        /* Smooth scroll */
        html { scroll-behavior: smooth; }

        ::selection {
          background: var(--accent);
          color: white;
        }
      `}</style>

<<<<<<< HEAD
      {/* Transition Overlay - Barcelona themed curtain */}
      <div className="transition-overlay">
        <div className={`transition-curtain ${isTransitioning ? 'active' : ''}`}>
          <div className="curtain-top"></div>
          <div className="curtain-bottom"></div>
          <div className="curtain-center">⚽</div>
        </div>
      </div>

      <div className={`portfolio ${isTransitioning ? 'transitioning' : ''}`}>
        <div className="bento">
          {/* Hero */}
          <div className="card hero-card">
            <div className="hero-content">
              <div>
                <p className="hero-greeting">Hey there, I'm</p>
                <h1 className="hero-name">Sarthak<br />Maurya</h1>
                <p className="hero-title">
                  <span>AI Engineer</span> building intelligent systems<br />
                  with ML, Deep Learning & LLMs
                </p>
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="mailto:sarthakmaurya04@gmail.com" className="cta-btn">
                  Let's Talk <IconArrow />
                </a>
                <a href="/sarthax_res.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn">
                  📄 Resume
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src={profilePic} alt="Sarthak" />
            </div>
          </div>

          {/* Clock */}
          <div className="card clock-card">
            <div className="clock-time">
              {time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
            </div>
            <div className="clock-label">India (IST)</div>
          </div>

          {/* Personal Portfolio */}
          <div
            className="card personal-card"
            onClick={handlePersonalClick}
          >
            <div className="personal-emoji">⚽</div>
            <div className="personal-title">Beyond Code</div>
            <div className="personal-hint">Explore my personal side →</div>
          </div>

          {/* About */}
          <div className="card about-card">
            <div className="section-label">About</div>
            <p className="about-text">
              I architect production-ready AI systems from LLM-powered agents to
              scalable ML pipelines. Currently building intelligent healthcare
              solutions at Neolytix, crafting RAG systems and AI agents that
              solve real-world problems.
            </p>
          </div>

          {/* Stack */}
          <div className="card stack-card">
            <div className="section-label">Tech Stack</div>
            <div className="stack-grid">
              {stack.map(tech => (
                <span key={tech} className="stack-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Projects */}
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`card project-card ${project.placeholder ? 'placeholder' : ''}`}
              onClick={() => !project.placeholder && window.open(project.link, '_blank')}
            >
              {!project.placeholder && <div className="arrow"><IconArrow /></div>}
              <div className="project-type">{project.type}</div>
              <div className="project-name">{project.name}</div>
              <div className="project-desc">{project.desc}</div>
            </div>
          ))}

          {/* Experience */}
          <div className="card experience-card">
            <div className="section-label">Experience</div>
            <div className="exp-item">
              <div className="exp-role">AI Intern</div>
              <div className="exp-company">Neolytix</div>
              <div className="exp-desc">Built CPT codes automation agent and production-ready RAG-based agents for healthcare</div>
              <div className="exp-date">Jul 2025 — Jan 2026</div>
            </div>
            <div className="exp-item">
              <div className="exp-role">Research Intern</div>
              <div className="exp-company">GGSIPU</div>
              <div className="exp-desc">Spam mail classification research using Naive Bayes and Logistic Regression</div>
              <div className="exp-date">Jul 2024 — Aug 2024</div>
            </div>
          </div>

          {/* Connect */}
          <div className="card connect-card">
            <div className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Connect</div>
            <h2 className="connect-title">Let's build something amazing together.</h2>
            <p className="connect-text">
              Open for AI/ML projects, consulting, and full-time opportunities.
            </p>
            <div className="social-links">
              <a href="https://github.com/sarthexe" target="_blank" rel="noreferrer" className="social-btn">
                <IconGithub />
              </a>
              <a href="https://linkedin.com/in/sarthax11" target="_blank" rel="noreferrer" className="social-btn">
                <IconLinkedin />
              </a>
              <a href="mailto:sarthakmaurya04@gmail.com" className="social-btn">
                <IconMail />
              </a>
            </div>
          </div>
=======
      {/* Background Effects */}
      <div className="interactive-bg" />
      <div className="noise-overlay" />
      <div className="grid-pattern" />

      {/* Navbar */}
      <nav className="nav">
        <div className="container flex-between" style={{ width: '100%' }}>
          <div className="nav-logo" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
            Sarthak Maurya
          </div>

          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }} className="hidden md:flex">
            {['Home', 'Work', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button onClick={() => setDarkMode(!darkMode)} style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer' }}>
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="https://linkedin.com/in/sarthax11" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}>
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/sarthexe" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)' }}>
              <Github size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="container">
          <AnimatedSection>
            {/* Badge removed as requested */}

            <h1 className="text-gradient">
              Designing AI systems for <br />
              <span style={{ color: 'var(--text-secondary)' }}>{displayedText}</span>
            </h1>

            <p>
              I build accessible, pixel-perfect, performant web applications using modern architecture and advanced machine learning.
            </p>

            <div className="flex-center" style={{ gap: '16px' }}>
              <button onClick={() => scrollToSection('work')} className="btn btn-primary">
                View Projects <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollToSection('contact')} className="btn btn-secondary">
                Contact Me
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Skills (Bento Grid) */}
      <section id="about" style={{ padding: '100px 0' }}>
        <div className="container">
          <AnimatedSection>
            <h2 style={{ marginBottom: '40px', fontSize: '2rem' }}>Technical Arsenal</h2>
            <div className="grid-bento">
              {skills.map((skill, i) => (
                <div key={i} className="card">
                  <div className="card-icon">{skill.icon}</div>
                  <h3>{skill.name}</h3>
                  <p className="text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects */}
      <section id="work" style={{ padding: '100px 0', background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="flex-between" style={{ marginBottom: '60px' }}>
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '12px' }}>Selected Work</h2>
              <p className="text-sm" style={{ maxWidth: '400px' }}>
                A collection of AI and ML products built for impact.
              </p>
            </div>
            <button className="btn btn-secondary hidden sm:flex" onClick={() => window.open("https://github.com/sarthexe", "_blank")}>
              View GitHub <ExternalLink size={14} />
            </button>
          </div>

          <div className="grid-bento">
            {projects.map((project, i) => (
              <AnimatedSection key={i} className={project.featured ? 'featured-project' : ''}>
                <div
                  className="card"
                  style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer' }}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <div>
                    <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                      <div style={{ padding: '12px', background: 'var(--bg-body)', borderRadius: '12px', display: 'inline-block' }}>
                        <Code2 size={24} />
                      </div>
                      {project.featured && <span className="badge" style={{ margin: 0 }}>Featured</span>}
                    </div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{project.title}</h3>
                    <p className="text-sm" style={{ marginBottom: '24px', lineHeight: 1.6 }}>{project.desc}</p>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                      <span key={tag} className="mono" style={{ fontSize: '0.75rem', padding: '4px 8px', background: 'var(--border-subtle)', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: '100px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '60px', fontSize: '2rem' }}>Experience</h2>
          <div>
            {experiences.map((exp, i) => (
              <AnimatedSection key={i} className="timeline-item">
                <div className="timeline-year">{exp.year}</div>
                <div>
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">{exp.company}</div>
                  <p className="text-sm" style={{ lineHeight: 1.6 }}>{exp.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '100px 0', background: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
          <AnimatedSection>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Let's Connect</h2>
            <p className="text-sm" style={{ marginBottom: '40px' }}>
              I'm currently accepting new contracts. Let's discuss how we can improve your product stack.
            </p>

            <div className="card" style={{ textAlign: 'left' }}>
              <div style={{ marginBottom: '16px' }}>
                <label className="text-sm" style={{ fontWeight: 600, marginBottom: '8px', display: 'block' }}>Your Message</label>
                <textarea
                  className="mono"
                  rows="4"
                  style={{ width: '100%', padding: '12px', background: 'var(--bg-body)', border: '1px solid var(--border-strong)', borderRadius: '8px', color: 'var(--text-primary)', resize: 'none' }}
                  placeholder="Tell me about the project..."
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                ></textarea>
              </div>

              <div className="flex-between">
                <button
                  onClick={handleEnhanceMessage}
                  className="btn btn-secondary"
                  style={{ fontSize: '0.8rem', padding: '8px 12px' }}
                  disabled={isEnhancing || isSent || isSending}
                >
                  {isEnhancing ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                  {isEnhancing ? 'Polishing...' : 'AI Polish'}
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleSendInquiry}
                  disabled={isSending || isSent || !contactMessage.trim()}
                  style={{ minWidth: '120px', justifyContent: 'center' }}
                >
                  {isSending ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : isSent ? (
                    <Check size={16} />
                  ) : (
                    <Send size={16} />
                  )}
                  <span style={{ marginLeft: '8px' }}>
                    {isSending ? 'Sending...' : isSent ? 'Sent!' : 'Send Inquiry'}
                  </span>
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Chat Widget */}
      <div className="chat-widget">
        {isChatOpen && (
          <div className="chat-window">
            <div className="chat-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
                <Bot size={18} /> Assistant
              </div>
              <button onClick={() => setIsChatOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                <X size={18} />
              </button>
            </div>
            <div className="chat-content">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`msg ${msg.role === 'user' ? 'msg-user' : 'msg-ai'}`}>
                  {msg.text}
                </div>
              ))}
              {isAiLoading && <div className="msg msg-ai"><Loader2 size={16} className="animate-spin" /></div>}
            </div>
            <form className="chat-input-wrapper" onSubmit={handleChatSubmit}>
              <input
                className="chat-input"
                placeholder="Ask about my skills..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
              />
              <button type="submit" className="btn btn-primary" style={{ padding: '8px', borderRadius: '8px' }} disabled={isAiLoading}>
                <Send size={16} />
              </button>
            </form>
          </div>
        )}
        <button className="fab" onClick={() => setIsChatOpen(!isChatOpen)}>
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>

      <footer style={{ padding: '40px 0', textAlign: 'center', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container text-sm">
          © 2025 Sarthak Maurya.
>>>>>>> e96c803 (Changed the github link for mindfulspace)
        </div>
      </div>
    </>
  );
}