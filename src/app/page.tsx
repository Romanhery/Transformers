// /src/app/page.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import SplineScene from '@/components/SplineScene';
import './globals.css';

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  // Horizontal scroll logic
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      if (!isActive) return; // don't hijack scroll unless active

      // allow normal scroll up if at the start
      if (container.scrollLeft === 0 && e.deltaY < 0) {
        setIsActive(false);
        return;
      }

      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [isActive]);

  // Watch scroll position to activate horizontal mode
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setOffsetY(scrollY);
          
          // Activate horizontal scroll when reaching impact section
          const triggerPoint = window.innerHeight * 2; // after hero + timeline
          if (scrollY >= triggerPoint) {
            setIsActive(true);
          } else {
            setIsActive(false);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ color: 'white', overflowX: 'hidden', fontFamily: 'var(--font-special)' }}>
      {/* Navigation */}
      <nav
        style={{
          position: 'fixed',
          top: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'center',
          padding: '0.75rem 2rem',
          borderRadius: '80px',
          background: 'rgba(255, 255, 255, 0.08)',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 0 20px rgba(124,0,255,0.3)',
          zIndex: 100,
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '2.5rem',
            margin: 0,
            padding: 0,
            fontSize: '1.1rem',
          }}
        >
          {['Transformers', 'Timeline', 'Impact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  transition: '0.3s ease',
                }}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        id="transformers"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingLeft: '15%',
          position: 'relative',
          overflow: 'hidden',
          background:
            'radial-gradient(circle at top left, rgba(45,0,255,0.6), transparent 60%), linear-gradient(-160deg, #0D0D0F, #3B007F 55%, #2D00FF)',
        }}
      >
        <h1
          className="dela-gothic-one-bold"
          style={{
            fontSize: '4.5rem',
            marginBottom: '1.5rem',
            transform: `translateX(${offsetY * 0.3}px) translateY(${offsetY * 0.15}px)`,
            textShadow: '0 0 25px rgba(124,0,255,0.7)',
            opacity: 1 - offsetY / 600,
          }}
        >
          Transformers
        </h1>
        <p
          style={{
            fontSize: '1.3rem',
            maxWidth: '600px',
            lineHeight: 1.6,
            transform: `translateX(${offsetY * -0.2}px) translateY(${offsetY * 0.1}px)`,
            opacity: 1 - offsetY / 600,
          }}
        >
          How Transformers Revolutionized Artificial Intelligence
        </p>

        <button
          className="explore-btn"
          onClick={() => {
            document.getElementById("timeline")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span>Explore</span>
        </button>

        <style jsx>{`
          .explore-btn {
            transform: translateY(${offsetY * 0.3}px);
            opacity: ${1 - offsetY / 600};
            margin-top: 2rem;
            padding: 1rem 2.5rem;
            font-size: 1.2rem;
            border: none;
            border-radius: 50px;
            color: white;
            cursor: pointer;
            width: 45%;
            font-weight: 500;
            letter-spacing: 0.05em;
            background: linear-gradient(
              to right,
              #656565,
              #7f42a7,
              #6600c5,
              #5300a0,
              #757575,
              #656565
            );
            background-size: 200%;
            animation: animationGradient 3.5s linear infinite;
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
            position: relative;
            overflow: hidden;
            z-index: 5;
          }
          .explore-btn::before {
            content: '';
            position: absolute;
            inset: 3px;
            border-radius: 50px;
            background-color: black;
            z-index: 1;
          }
          .explore-btn span {
            position: relative;
            z-index: 2;
          }
          .explore-btn:hover span {
            color: #5300a0;
            transition: 0.3s ease;
          }
          @keyframes animationGradient {
            to { background-position: 200%; }
          }
        `}</style>

        <div
          style={{
            position: 'absolute',
            left: '30%',
            top: '0%',
            transform: `translateY(${offsetY * 0.6}px) scale(${1 + offsetY * 0.0002})`,
            width: '100%',
            height: '60%',
            filter: 'drop-shadow(0 0 30px rgba(124,0,255,0.6))',
          }}
        >
          <SplineScene />
        </div>
      </section>

      {/* Timeline Section */}
      <section
        id="timeline"
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          background:
            'radial-gradient(circle at bottom right, rgba(255,0,180,0.5), transparent 60%), linear-gradient(160deg, #2D00FF, #7C00FF 55%, #0D0D0F)',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '3.5rem',
            marginBottom: '1rem',
            transform: `translateY(${offsetY * -0.2}px)`,
            textShadow: '0 0 20px rgba(255,0,200,0.6)',
          }}
        >
          Timeline
        </h2>
        <p style={{ maxWidth: '700px', lineHeight: 1.6 }}>
          The evolution of transformers across key milestones in AI.
        </p>
      </section>

      {/* Impact Section - Horizontal Scroll */}
      <section
        id="impact"
        style={{
          height: "100vh",
          overflow: "hidden",
          position: "relative",
          background: "black",
        }}
      >
        <div
          ref={containerRef}
          style={{
            display: "flex",
            overflowX: "auto",
            width: "100%",
            height: "100%",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE/Edge
          }}
        >
          {/* Hide scrollbar for Webkit browsers */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {/* Impact Slide 1 - Natural Language Processing */}
          <div
            style={{
              flex: "0 0 100vw",
              height: "100%",
              background: "linear-gradient(135deg, #2D00FF, #4A00E0)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '80%' }}>
              <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>🧠</div>
              <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                Natural Language Processing
              </h3>
              <p style={{ fontSize: '1.5rem', lineHeight: 1.6, opacity: 0.9 }}>
                Transformers revolutionized how AI understands and generates human language, 
                powering everything from chatbots to translation systems with unprecedented accuracy.
              </p>
            </div>
          </div>

          {/* Impact Slide 2 - Computer Vision */}
          <div
            style={{
              flex: "0 0 100vw",
              height: "100%",
              background: "linear-gradient(135deg, #5300A0, #7B2CBF)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '80%' }}>
              <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>👁️</div>
              <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                Computer Vision
              </h3>
              <p style={{ fontSize: '1.5rem', lineHeight: 1.6, opacity: 0.9 }}>
                Vision Transformers (ViTs) changed how AI processes images, achieving state-of-the-art 
                results in image classification, object detection, and visual understanding tasks.
              </p>
            </div>
          </div>

          {/* Impact Slide 3 - Global Innovation */}
          <div
            style={{
              flex: "0 0 100vw",
              height: "100%",
              background: "linear-gradient(135deg, #7F42A7, #9D4EDD)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '80%' }}>
              <div style={{ fontSize: '4rem', marginBottom: '2rem' }}>🌍</div>
              <h3 style={{ fontSize: '3rem', marginBottom: '1.5rem', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}>
                Global Innovation
              </h3>
              <p style={{ fontSize: '1.5rem', lineHeight: 1.6, opacity: 0.9 }}>
                The transformer architecture sparked a new era of AI development, enabling breakthroughs 
                in research, industry applications, and creative AI tools used worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '1rem',
            borderRadius: '50px',
            fontSize: '0.9rem',
            opacity: isActive ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        >
          {isActive ? '🖱️ Scroll horizontally' : ''}
        </div>
      </section>
    </div>
  );
}