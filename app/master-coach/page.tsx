import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import SectionDivider from '@/components/SectionDivider';

export const metadata: Metadata = {
  title: 'Profil Master Coach: Ibu Yayu Windharti | Veteran Hospitality Bintang 5 GloHC',
  description:
    'Profil Yayu Windharti, Director of Operation & Master Coach GloHC dengan 35+ tahun rekam jejak memimpin operasional hotel bintang 5 (Sofitel, Accor, Sheraton, Hyatt Regency).',
  openGraph: {
    title: 'Profil Master Coach: Ibu Yayu Windharti | GloHC Indonesia',
    description:
      '35+ tahun pengalaman memimpin operasional hotel bintang 5: Sofitel Grand Mahakam, Accor Ibis, Sheraton, hingga Hyatt Regency. Kini membina ratusan talenta hospitality di GloHC.',
    url: 'https://glohc.id/master-coach',
    images: ['/images/coach-speaker.png'],
  },
};

const timelineData = [
  {
    role: 'Director of Operation',
    company: 'Global Hospitality Coach (GloHC) · Jakarta',
    period: 'Nov 2010 – Sekarang (16 Tahun)',
    isCurrent: true,
    desc: 'Memimpin perancangan kurikulum pelatihan service excellence, standarisasi audit operasional, supervisi master coaches, serta memfasilitasi ratusan workshop in-house untuk jaringan F&B, hotel, dan institusi layanan terkemuka di seluruh Indonesia.',
  },
  {
    role: 'General Manager & Business Development Director',
    company: 'PT. Budhi Dharma — Gaya Spa · Jakarta',
    period: '2009 – 2011 (2 Tahun)',
    isCurrent: false,
    desc: 'Mengelola seluruh operasional wellness & luxury spa, mengembangkan strategi ekspansi bisnis, serta memastikan standar kepuasan pelanggan premium terpenuhi secara konsisten.',
  },
  {
    role: 'Business Development Director',
    company: 'Hospitality World Indonesia · Jakarta',
    period: 'Nov 2007 – 2009 (1 thn 3 bln)',
    isCurrent: false,
    desc: 'Membangun kemitraan strategis dengan pemilik properti hotel dan restoran, serta merancang program konsultasi pengembangan mutu layanan hospitality skala nasional.',
  },
  {
    role: 'Front Office Manager',
    company: 'Grandkemang Hotel · Jakarta',
    period: '2004 – 2006 (2 Tahun)',
    isCurrent: false,
    desc: 'Memimpin divisi Front Office hotel butik bintang empat premium di Jakarta Selatan, mengelola tim reservasi, concierge, dan guest relations, serta meningkatkan indeks kepuasan tamu menginap.',
  },
  {
    role: 'Front Office Manager',
    company: 'Ibis Arcadia — Accor Group · Jakarta',
    period: '2002 – 2004 (2 Tahun)',
    isCurrent: false,
    desc: 'Menerapkan standar operasional global Accor Group untuk layanan front office, kecepatan check-in/out, penanganan komplain cepat, dan efisiensi koordinasi lintas departemen.',
  },
  {
    role: 'Front Office Manager',
    company: 'Grand Mahakam Sofitel Luxury Hotels & Resorts · Jakarta',
    period: '1997 – 1999 (2 Tahun)',
    isCurrent: false,
    desc: 'Mengawal standar kemewahan layanan khas Sofitel Luxury Hotels, menangani kedatangan tamu diplomatik dan VIP internasional, serta melatih staf dalam etiket hospitality tingkat tinggi.',
  },
  {
    role: 'Guest Service Manager',
    company: 'Sheraton Hotel · Jakarta',
    period: '1996 – 1997 (1 Tahun)',
    isCurrent: false,
    desc: 'Mengelola operasional harian departemen Front Office dan mensupervisi seluruh staf. Bertanggung jawab memastikan kelancaran operasional layanan harian dan penanganan kebutuhan khusus tamu hotel bintang lima.',
  },
  {
    role: 'Team Leader Regency Club',
    company: 'Hyatt Regency · Surabaya',
    period: '1992 – 1995 (3 Tahun)',
    isCurrent: false,
    desc: 'Memimpin operasional area eksklusif Regency Club, mengawasi kinerja Guest Relation dan Butler, serta memastikan standar pelayanan personal terbaik bagi seluruh tamu eksekutif yang menginap di lantai Regency Club.',
  },
  {
    role: 'Guest Relation Supervisor',
    company: 'Grand Sahid Jaya Hotel · Surabaya',
    period: '1990 – 1991 (1 Tahun)',
    isCurrent: false,
    desc: 'Mensupervisi tim guest relations, menyambut tamu kenegaraan, dan memastikan koordinasi protokol perjamuan serta kenyamanan tamu berjalan sempurna.',
  },
  {
    role: 'Guest Relation Officer',
    company: 'Garden Palace Hotel · Surabaya',
    period: '1987 – 1990 (3 Tahun)',
    isCurrent: false,
    desc: 'Mengawali karier profesional hospitality: membantu tamu mendapatkan pengalaman menginap yang nyaman dan menyenangkan, mempersiapkan penyambutan tamu khusus VIP, serta mendampingi tamu selama masa inap.',
  },
];

export default function MasterCoachPage() {
  return (
    <main>
      {/* ═══ PAGE HEADER ═══ */}
      <div className="page-header">
        <div className="container page-header__inner">
          <h1>Yayu Windharti</h1>
          <p>
            35+ Tahun Rekam Jejak Dedikasi Nyata Membangun Standar Pelayanan Hospitality Berkelas Dunia di Indonesia.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://www.linkedin.com/in/yayu-windharti-8386b516/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--sm"
              style={{
                background: '#0a66c2',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                borderRadius: 'var(--radius-full)',
                fontWeight: 600,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63 1.63-.73 1.63-1.63c0-.9-.73-1.63-1.63-1.63Z" />
              </svg>
              Profil LinkedIn Resmi
            </a>
            <a
              href="#timeline"
              className="btn btn--white btn--sm"
              style={{ border: '1px solid var(--blue-200)', borderRadius: 'var(--radius-full)', fontWeight: 600 }}
            >
              Lihat Rekam Jejak 35+ Tahun &darr;
            </a>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* ═══ COACH SPOTLIGHT BANNER ═══ */}
      <section className="coach" style={{ padding: 'var(--section-py) 0', background: '#fff' }}>
        <div className="container">
          <div className="coach__banner">
            <div className="coach__grid">
              <div className="coach__photo">
                <Image
                  src="/images/coach-speaker.png"
                  alt="Yayu Windharti - Director of Operation GloHC"
                  width={380}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: 'var(--radius-xl)' }}
                />
              </div>

              <div className="coach__copy">
                <div className="coach__badge">
                  <span className="coach__badge-dot"></span>
                  Director of Operation — GloHC
                </div>
                <h3>Yayu Windharti</h3>
                <p>
                  <strong>35+ Tahun Memimpin Tim Operasional di Jaringan Hotel Bintang Lima Internasional.</strong>
                </p>
                <p>
                  Dari frontline melayani tamu VVIP di Hyatt Regency Surabaya, Sheraton Jakarta, Sofitel Grand Mahakam, Accor Ibis, hingga memimpin operasional Global Hospitality Coach sejak November 2010. Beliau memadukan ketegasan standar internasional dengan kehangatan keramahan khas nusantara.
                </p>
                <p style={{ fontSize: '0.8125rem', opacity: 0.9, fontStyle: 'italic' }}>
                  &quot;Pelayanan prima bukanlah hafalan senyum di depan cermin, melainkan empati tulus yang terlatih melalui refleks simulasi ribuan jam di lantai operasional riil.&quot;
                </p>
                <div className="coach__action" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/#waitlist" className="btn btn--white btn--sm">
                    Konsultasi Program dengan Bu Yayu
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/yayu-windharti-8386b516/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--sm"
                    style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)' }}
                  >
                    Lihat di LinkedIn &rarr;
                  </a>
                </div>
              </div>

              <div className="coach__rows">
                <div className="coach__row">
                  <div className="coach__row-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                  </div>
                  <div className="coach__row-text">
                    <strong>35+ Tahun Pengalaman Industri</strong>
                    <span>Hyatt Regency, Sheraton, Sofitel, Accor, Grandkemang</span>
                  </div>
                </div>

                <div className="coach__row">
                  <div className="coach__row-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  </div>
                  <div className="coach__row-text">
                    <strong>16 Tahun Director of Operation</strong>
                    <span>Memimpin mutu kurikulum &amp; operasional GloHC sejak 2010</span>
                  </div>
                </div>

                <div className="coach__row">
                  <div className="coach__row-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M20 12v8H4v-8"/><path d="m4 4 8 4 8-4-8-3-8 3Z"/></svg>
                  </div>
                  <div className="coach__row-text">
                    <strong>70% Simulasi Nyata di Lapangan</strong>
                    <span>Roleplay penanganan tamu VIP &amp; resolusi krisis riil</span>
                  </div>
                </div>

                <div className="coach__row">
                  <div className="coach__row-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>
                  <div className="coach__row-text">
                    <strong>Standar Kurikulum Internasional</strong>
                    <span>Terbukti melipatgandakan kepuasan &amp; repeat order tamu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ CAREER TIMELINE SECTION ═══ */}
      <section className="timeline-section" id="timeline">
        <div className="container">
          <div className="section-header">
            <span className="pill pill--blue">Perjalanan Karier &amp; Rekam Jejak</span>
            <h2>35+ Tahun Dedikasi Nyata di Lantai Operasional</h2>
            <p>
              Rekam jejak karier autentik Yayu Windharti dari garis depan hotel bintang lima hingga memimpin operasional Global Hospitality Coach.
            </p>
          </div>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline__item">
                <div className={`timeline__dot ${item.isCurrent ? 'timeline__dot--current' : ''}`}></div>
                <div className="timeline__card">
                  <div className="timeline__header">
                    <div>
                      <div className="timeline__role">{item.role}</div>
                      <div className="timeline__company">{item.company}</div>
                    </div>
                    <span className={`timeline__period ${item.isCurrent ? 'timeline__period--active' : ''}`}>
                      {item.period}
                    </span>
                  </div>
                  <p className="timeline__desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ SPESIALISASI COACH ═══ */}
      <section className="about" style={{ background: '#fff', padding: 'var(--section-py) 0' }}>
        <div className="container">
          <div className="section-header">
            <span className="pill pill--blue">Area Keahlian</span>
            <h2>4 Pilar Keahlian Master Coach</h2>
            <p>Pendekatan terstruktur yang menyentuh seluruh aspek pelayanan dari garis depan hingga level manajemen.</p>
          </div>

          <div className="value-grid">
            <div className="value-card">
              <div className="value-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <h4>Heart-Centered Service</h4>
              <p>Membangun kebiasaan menyapa dengan mata, mendengarkan aktif, dan menebak kebutuhan tamu sebelum diminta.</p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
                </svg>
              </div>
              <h4>Crisis &amp; Complaint Recovery</h4>
              <p>Mengubah situasi tamu marah, pesanan salah, atau waktu tunggu lama menjadi momen pembuktian komitmen layanan.</p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h4>Supervisory Coaching</h4>
              <p>Melatih supervisor dan floor captain cara menegur staf yang konstruktif tanpa meruntuhkan moral kerja tim.</p>
            </div>

            <div className="value-card">
              <div className="value-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <h4>Suggestive Selling &amp; Upselling</h4>
              <p>Meningkatkan nilai transaksi melalui rekomendasi menu, upgrade kamar, paket spa, atau perawatan estetika yang alami dan berkelas.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ CTA SECTION ═══ */}
      <section className="waitlist" style={{ background: 'var(--blue-50)', padding: 'var(--section-py) 0' }}>
        <div className="container">
          <div className="waitlist__inner" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
            <div className="waitlist__copy">
              <span className="pill pill--blue" style={{ margin: '0 auto' }}>Undang Coach ke Bisnis Anda</span>
              <h2>Hadirkan Master Coach Langsung di Hadapan Tim Anda</h2>
              <p>GloHC melayani in-house training dan konsultasi audit operasional untuk hotel, restoran, salon wellness, dan klinik estetika di seluruh Indonesia.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/#waitlist" className="btn btn--primary">
                  Daftar Waitlist Batch 1
                </Link>
                <a
                  href="https://wa.me/6281213269141?text=Halo%20GloHC%20Saya%20ingin%20mengundang%20Master%20Coach%20untuk%20tim%20kami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Hubungi via WhatsApp (+62 812-1326-9141)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
