'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/program', label: 'Program' },
    { href: '/jadwal', label: 'Jadwal' },
    { href: '/master-coach', label: 'Master Coach' },
    { href: '/faq', label: 'FAQ' },
  ];

  return (
    <>
      {/* ═══ TOP NOTIFICATION BAR ═══ */}
      <div className="topbar">
        <span className="topbar__badge">COMING SOON</span>
        <span>Pendaftaran Batch 1 <strong>Service Excellence Workshop</strong> — 50 Kursi Pertama!</span>
        <Link href="/#waitlist">Akses Prioritas &rarr;</Link>
      </div>

      {/* ═══ HEADER ═══ */}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="container header__inner">
          <Link href="/" className="logo" aria-label="GloHC Global Hospitality Coach">
            <Image
              src="/images/logo-glohc.png"
              alt="GloHC Logo"
              width={40}
              height={40}
              className="logo__img"
              priority
            />
            <div className="logo__text">
              <div className="logo__name">
                <span>G</span><span>l</span><span>o</span><span>H</span><span>C</span>
              </div>
              <span className="logo__sub">Global Hospitality Coach</span>
            </div>
          </Link>

          <nav className="nav">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? 'active' : ''}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/#waitlist" className="header__cta btn btn--primary btn--sm">
            Join Waitlist
          </Link>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={isActive ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/#waitlist"
            className="btn btn--primary"
            onClick={() => setMobileMenuOpen(false)}
          >
            Join Waitlist Batch 1
          </Link>
        </div>
      </header>
    </>
  );
}

