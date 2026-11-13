import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">

          <div className="footer__brand">
            <Link href="/" className="footer__brand-logo" aria-label="GloHC Home" style={{ textDecoration: 'none' }}>
              <Image
                src="/images/logo-glohc.png"
                alt="GloHC Logo"
                width={36}
                height={36}
                className="footer__logo-img"
                style={{ objectFit: 'contain' }}
              />
              <div className="logo__text">
                <div className="logo__name" style={{ color: '#ffffff' }}>
                  <span>G</span><span>l</span><span>o</span><span>H</span><span>C</span>
                </div>
                <span className="logo__sub" style={{ color: 'rgba(255,255,255,0.65)' }}>Global Hospitality Coach</span>
              </div>
            </Link>
            <p>
              <strong>Global Hospitality Coach</strong> — Mengembangkan talenta dan garda depan industri perhotelan, restoran, salon wellness, dan klinik estetika di Indonesia dengan standar pelayanan berkelas dunia.
            </p>
            <div className="footer__location">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Jakarta &amp; Surabaya, Indonesia
            </div>
          </div>

          <div className="footer__links">
            <h5>Navigasi</h5>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/program">Program</Link></li>
              <li><Link href="/jadwal">Jadwal</Link></li>
              <li><Link href="/master-coach">Master Coach</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h5>Konsultasi Korporat</h5>
            <p>Butuh in-house training khusus cabang Anda dengan kurikulum yang disesuaikan?</p>
            <a
              href="https://wa.me/6281213269141?text=Halo%20GloHC%2C%20saya%20ingin%20konsultasi%20mengenai%20corporate%20training%20hospitality"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__wa"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>+62 812-1326-9141</span>
            </a>
          </div>

        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Global Hospitality Coach (GloHC). Hak Cipta Dilindungi.</p>
          <div className="footer__bottom-links">
            <a href="#">Syarat &amp; Ketentuan</a>
            <a href="#">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
