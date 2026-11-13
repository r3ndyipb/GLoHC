import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SectionDivider from '@/components/SectionDivider';

export const metadata: Metadata = {
  title: 'Jadwal Workshop & In-House Training 2026/2027 | GloHC Indonesia',
  description:
    'Jadwal resmi Service Excellence Workshop Batch 1, Batch 2, dan Batch 3 di Jakarta, Surabaya, Bandung, dan Bali. Amankan kuota pendaftaran tim Anda sebelum ditutup.',
  openGraph: {
    title: 'Jadwal Workshop & In-House Training — GloHC Indonesia',
    description:
      'Pilih batch pelatihan terdekat untuk tim operasional hotel, F&B, dan ritel Anda.',
    url: 'https://glohc.id/jadwal',
  },
};

export default function JadwalPage() {
  return (
    <main>
      {/* ═══ PAGE HEADER ═══ */}
      <div className="page-header">
        <div className="container page-header__inner">
          <h1>Jadwal Pelatihan yang Sedang Berjalan &amp; Mendatang</h1>
          <p>
            Pilih batch yang paling sesuai dengan ritme operasional outlet atau properti Anda. Kuota dibatasi maksimal 25 peserta per batch untuk menjaga kualitas simulasi.
          </p>
        </div>
      </div>

      <SectionDivider />

      {/* ═══ JADWAL SECTION ═══ */}
      <section className="schedule" style={{ background: '#fff', padding: 'var(--section-py) 0' }}>
        <div className="container">
          <div className="schedule-grid">
            {/* Card 1: Sedang Berjalan */}
            <div className="schedule-card schedule-card--active">
              <div className="schedule-card__header">
                <span className="schedule-badge schedule-badge--active">
                  <span className="schedule-badge__dot"></span>
                  Sedang Berjalan
                </span>
                <span className="schedule-card__batch">Batch 01</span>
              </div>
              <div className="schedule-card__body">
                <h3 className="schedule-card__title">Service Excellence Masterclass — Jakarta</h3>
                <p className="schedule-card__desc">
                  Fokus pada mentalitas hospitality DNA, teknik first impression 3 detik, dan roleplay penanganan keluhan tamu.
                </p>
                <div className="schedule-card__details">
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    <span>15 – 16 November 2026 (09:00 - 17:00 WIB)</span>
                  </div>
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Hotel Bintang 5, Senayan, Jakarta Selatan</span>
                  </div>
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span>Kuota: 25 Peserta (<strong>Penuh / Full Booked</strong>)</span>
                  </div>
                </div>
              </div>
              <div className="schedule-card__footer">
                <div className="schedule-progress">
                  <div className="schedule-progress__bar" style={{ width: '100%' }}></div>
                </div>
                <span className="schedule-progress__text">Status: 25/25 Kursi Terisi</span>
                <button
                  className="btn btn--outline btn--sm"
                  style={{ width: '100%', marginTop: '0.25rem', opacity: 0.6, cursor: 'not-allowed' }}
                  disabled
                >
                  Pendaftaran Ditutup
                </button>
              </div>
            </div>

            {/* Card 2: Akan Jalan (Surabaya) */}
            <div className="schedule-card">
              <div className="schedule-card__header">
                <span className="schedule-badge schedule-badge--upcoming">
                  <span className="schedule-badge__dot" style={{ background: 'var(--blue-500)' }}></span>
                  Pendaftaran Dibuka
                </span>
                <span className="schedule-card__batch">Batch 02</span>
              </div>
              <div className="schedule-card__body">
                <h3 className="schedule-card__title">Service Excellence Masterclass — Surabaya</h3>
                <p className="schedule-card__desc">
                  Khusus staf hotel, restoran &amp; dining, salon wellness, dan klinik estetika yang ingin meningkatkan retensi pelanggan melalui service touchpoint bintang lima.
                </p>
                <div className="schedule-card__details">
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    <span>29 – 30 November 2026 (09:00 - 17:00 WIB)</span>
                  </div>
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>JW Marriott Hotel, Surabaya Pusat</span>
                  </div>
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span>Kuota: 25 Peserta (<strong>Sisa 6 Kursi</strong>)</span>
                  </div>
                </div>
              </div>
              <div className="schedule-card__footer">
                <div className="schedule-progress">
                  <div className="schedule-progress__bar" style={{ width: '76%' }}></div>
                </div>
                <span className="schedule-progress__text">19 dari 25 kursi terisi (Sisa 6 kursi)</span>
                <Link
                  href="/#waitlist"
                  className="btn btn--primary btn--sm"
                  style={{ width: '100%', marginTop: '0.25rem', textAlign: 'center', justifyContent: 'center' }}
                >
                  Daftar Batch Surabaya
                </Link>
              </div>
            </div>

            {/* Card 3: Akan Jalan (Bandung) */}
            <div className="schedule-card">
              <div className="schedule-card__header">
                <span className="schedule-badge schedule-badge--upcoming">
                  <span className="schedule-badge__dot" style={{ background: 'var(--blue-500)' }}></span>
                  Pendaftaran Dibuka
                </span>
                <span className="schedule-card__batch">Batch 03</span>
              </div>
              <div className="schedule-card__body">
                <h3 className="schedule-card__title">Hospitality Leadership &amp; Complaint Mastery — Bandung</h3>
                <p className="schedule-card__desc">
                  Dirancang bagi supervisor hotel, floor manager resto, head therapist spa, dan manajer klinik estetika untuk menyusun SOP dan kontrol mutu layanan.
                </p>
                <div className="schedule-card__details">
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    <span>13 – 14 Desember 2026 (09:00 - 17:00 WIB)</span>
                  </div>
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>Pullman Grand Central, Bandung</span>
                  </div>
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span>Kuota: 25 Peserta (<strong>Sisa 14 Kursi</strong>)</span>
                  </div>
                </div>
              </div>
              <div className="schedule-card__footer">
                <div className="schedule-progress">
                  <div className="schedule-progress__bar" style={{ width: '44%' }}></div>
                </div>
                <span className="schedule-progress__text">11 dari 25 kursi terisi (Sisa 14 kursi)</span>
                <Link
                  href="/#waitlist"
                  className="btn btn--primary btn--sm"
                  style={{ width: '100%', marginTop: '0.25rem', textAlign: 'center', justifyContent: 'center' }}
                >
                  Daftar Batch Bandung
                </Link>
              </div>
            </div>

            {/* Card 4: Segera Dibuka (Bali) */}
            <div className="schedule-card">
              <div className="schedule-card__header">
                <span className="schedule-badge schedule-badge--soon">
                  <span className="schedule-badge__dot" style={{ background: 'var(--amber-500)' }}></span>
                  Early Bird 2027
                </span>
                <span className="schedule-card__batch">Batch 04</span>
              </div>
              <div className="schedule-card__body">
                <h3 className="schedule-card__title">Luxury Hospitality &amp; VVIP Guest Relations — Bali</h3>
                <p className="schedule-card__desc">
                  Standar pelayanan internasional kelas VVIP untuk luxury hotel, resort &amp; villa, restoran fine dining, wellness spa, dan klinik kecantikan premium.
                </p>
                <div className="schedule-card__details">
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    <span>10 – 11 Januari 2027 (09:00 - 17:00 WITA)</span>
                  </div>
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <span>The Stones Hotel Legian, Bali</span>
                  </div>
                  <div className="schedule-card__detail">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    <span>Kuota: 25 Peserta (<strong>Pendaftaran Early Bird</strong>)</span>
                  </div>
                </div>
              </div>
              <div className="schedule-card__footer">
                <div className="schedule-progress">
                  <div className="schedule-progress__bar" style={{ width: '20%', background: 'var(--amber-500)' }}></div>
                </div>
                <span className="schedule-progress__text">Early Bird dibuka (Diskon 25%)</span>
                <Link
                  href="/#waitlist"
                  className="btn btn--primary btn--sm"
                  style={{ width: '100%', marginTop: '0.25rem', textAlign: 'center', justifyContent: 'center' }}
                >
                  Klaim Early Bird Bali
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ FASILITAS PESERTA ═══ */}
      <section className="about" style={{ background: 'var(--slate-50)', padding: 'var(--section-py) 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="pill pill--blue">Investasi Terbaik Tim Anda</span>
            <h2>Fasilitas Eksklusif Setiap Peserta</h2>
            <p>
              Setiap tiket workshop mencakup seluruh kebutuhan belajar, materi, konsumsi, dan pendampingan pasca pelatihan.
            </p>
          </div>

          <div className="value-grid">
            <div className="value-card">
              <div className="value-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10"/><path d="M6 10h10"/>
                </svg>
              </div>
              <h4>Buku Saku SOP &amp; Modul</h4>
              <p>Buku panduan saku praktis dan digital toolkit yang dapat langsung dijadikan pedoman harian staf di outlet.</p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <h4>Sertifikat Lisensi Resmi</h4>
              <p>Sertifikat resmi kompetensi Service Excellence dengan verifikasi barcode kredensial industri.</p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                </svg>
              </div>
              <h4>Konsumsi Hotel Bintang 5</h4>
              <p>Lunch buffet mewah dan 2x coffee break premium di hotel bintang lima tempat acara berlangsung.</p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h4>30 Hari Mentorship Grup</h4>
              <p>Akses ke WhatsApp Group eksklusif bersama Master Coach untuk konsultasi kendala operasional lapangan.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
