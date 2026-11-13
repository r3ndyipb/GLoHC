import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import SectionDivider from '@/components/SectionDivider';
import SocialProofMarquee from '@/components/SocialProofMarquee';
import NewsSliderMarquee from '@/components/NewsSliderMarquee';
import FAQAccordion, { FAQItemData } from '@/components/FAQAccordion';
import WaitlistForm from '@/components/WaitlistForm';

export const metadata: Metadata = {
  title: 'GloHC — Global Hospitality Coach | Standarisasi Layanan Bintang Lima',
  description:
    'Lembaga pelatihan dan konsultasi hospitality terkemuka di Indonesia. Standarisasi Service Excellence berstandar bintang lima untuk perhotelan, restoran, salon wellness, dan klinik estetika.',
};

const homeFaqs: FAQItemData[] = [
  {
    q: 'Apakah program ini cocok untuk hotel, resto, salon wellness, dan klinik estetika?',
    a: 'Sangat cocok. Setiap bisnis yang mengandalkan kepuasan pelanggan—mulai dari perhotelan, restoran & dining, salon & day spa wellness, hingga klinik estetika—memerlukan sentuhan hospitality berkelas bintang lima untuk membangun reputasi prestisius, menaikkan repeat order, dan mengunci loyalitas tamu.',
  },
  {
    q: 'Apakah staf saya hanya akan mendengarkan ceramah seharian?',
    a: 'Sama sekali tidak. Rasio kami adalah 30% teori pembuka dan 70% simulasi kasus nyata, roleplay, dan pembiasaan fisik. Setiap peserta akan dipraktikkan langsung.',
  },
  {
    q: 'Kapan tanggal dan di mana lokasi workshop diadakan?',
    a: 'Jadwal dan lokasi eksklusif akan diumumkan pertama kali kepada pendaftar di Waitlist. Mereka mendapatkan prioritas booking kursi sebelum dibuka untuk umum.',
  },
  {
    q: 'Apakah ada harga khusus untuk pendaftaran tim (Group Pass)?',
    a: 'Ya! Kami menyediakan paket investasi khusus Group Booking (3+ peserta) serta opsi Corporate In-House Training jika Anda ingin pelatihan langsung di tempat usaha Anda.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ═══ HERO SECTION ═══ */}
      <section className="hero">
        <div className="hero__glow"></div>
        <div className="hero__circle"></div>

        <div className="container hero__inner">
          <div className="hero__copy">
            <div className="pill pill--blue">
              <span className="pill__dot pill__dot--pulse"></span>
              Hospitality Coaching &amp; Training
            </div>

            <h1 className="hero__headline">
              Membangun Standar Layanan <span>Hospitality Kelas Dunia</span>.
            </h1>

            <p className="hero__sub">
              Pelatihan operasional intensif bersama praktisi veteran bintang lima untuk mentransformasi staf hotel, restoran, salon wellness, dan klinik estetika menjadi garda depan beretika prima dengan reputasi layanan kelas dunia.
            </p>

            <div className="hero__actions">
              <a href="#waitlist" className="btn btn--primary">
                <span>Konsultasi Program</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
              <Link href="/program" className="btn btn--outline">
                <span>Lihat Program</span>
              </Link>
            </div>

            <div className="hero__proof">
              <div className="hero__avatars">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=96&h=96&q=80" alt="Alumni Eksekutif GloHC" />
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80" alt="Alumni Eksekutif GloHC" />
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=96&h=96&q=80" alt="Alumni Eksekutif GloHC" />
                <div className="more">+1.2k</div>
              </div>
              <div>
                <div className="hero__stars">
                  <svg viewBox="0 0 20 20"><path d="M10 1l2.39 6.19H19l-5.3 4.12L15.68 18 10 14.27 4.32 18l1.98-6.69L1 7.19h6.61z"/></svg>
                  <svg viewBox="0 0 20 20"><path d="M10 1l2.39 6.19H19l-5.3 4.12L15.68 18 10 14.27 4.32 18l1.98-6.69L1 7.19h6.61z"/></svg>
                  <svg viewBox="0 0 20 20"><path d="M10 1l2.39 6.19H19l-5.3 4.12L15.68 18 10 14.27 4.32 18l1.98-6.69L1 7.19h6.61z"/></svg>
                  <svg viewBox="0 0 20 20"><path d="M10 1l2.39 6.19H19l-5.3 4.12L15.68 18 10 14.27 4.32 18l1.98-6.69L1 7.19h6.61z"/></svg>
                  <svg viewBox="0 0 20 20"><path d="M10 1l2.39 6.19H19l-5.3 4.12L15.68 18 10 14.27 4.32 18l1.98-6.69L1 7.19h6.61z"/></svg>
                </div>
                <p className="hero__proof-text">1,200+ Alumni &amp; 150+ Hotel, Resto, Salon &amp; Klinik di Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Anchored to Far Right Corner */}
        <div className="hero__visual">
          <div className="hero__img-wrapper">
            <img
              src="/images/pro-person-blank.png"
              alt="GloHC Professional Master Coach"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ SOCIAL PROOF MARQUEE ═══ */}
      <SocialProofMarquee />

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ PAIN POINTS ═══ */}
      <section className="pain">
        <div className="container">
          <div className="section-header">
            <span className="pill pill--red">Tantangan Bisnis Nyata</span>
            <h2>Produk Hebat Saja Tidak Cukup Tanpa Pelayanan yang Membekas.</h2>
            <p>Sebagian besar tamu yang kecewa tidak pernah mengajukan keluhan—mereka hanya pergi dalam diam dan tidak pernah kembali lagi.</p>
          </div>

          <div className="card-grid">
            <div className="card">
              <div className="card__icon card__icon--red">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="17" x2="22" y1="8" y2="13"/><line x1="22" x2="17" y1="8" y2="13"/>
                </svg>
              </div>
              <h3>Tamu Hanya Datang Sekali</h3>
              <p>Pengalaman servis yang dingin dan terkesan enggan melayani membuat tamu tidak pernah kembali.</p>
            </div>

            <div className="card">
              <div className="card__icon card__icon--amber">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>
                </svg>
              </div>
              <h3>Panik di Jam Sibuk</h3>
              <p>Komunikasi tim pecah saat pesanan menumpuk, wajah staf tegang, waktu tunggu molor tak terkendali.</p>
            </div>

            <div className="card">
              <div className="card__icon card__icon--blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><path d="M11 18H8a2 2 0 0 1-2-2V9"/>
                </svg>
              </div>
              <h3>Standar Layanan Belang-Belang</h3>
              <p>Kualitas pelayanan hanya baik saat diawasi Manajer. Saat shift berganti, standar merosot drastis.</p>
            </div>

            <div className="card">
              <div className="card__icon card__icon--purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="12" x="3" y="6" rx="2"/><path d="M7 6V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/><line x1="12" x2="12" y1="10" y2="14"/>
                </svg>
              </div>
              <h3>Kurang Inisiatif Melayani</h3>
              <p>Staf bekerja pasif menunggu instruksi, tidak peka terhadap tamu yang membutuhkan bantuan.</p>
            </div>
          </div>

          <div className="pain__quote">
            <p className="pain__quote-text">&ldquo;Jangan biarkan potensi pendapatan bisnis Anda menguap hanya karena tiadanya standar pelayanan.&rdquo;</p>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider className="section-divider--white" />

      {/* ═══ ABOUT US ═══ */}
      <section className="about" id="about">
        <div className="container about__inner">
          <div className="about__photo">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="GloHC Training Session" loading="lazy" decoding="async" />
            <div className="about__photo-overlay"></div>
            <div className="about__photo-badge">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              Praktisi Berpengalaman
            </div>
          </div>

          <div className="about__copy">
            <span className="pill pill--blue">Tentang GloHC</span>
            <h2>Dari Komunitas Praktisi, Tumbuh Menjadi Institusi Pengembang Standar Layanan Nasional.</h2>

            <p><strong>Global Hospitality Coach (GloHC)</strong> berawal dari wadah berkumpulnya para praktisi, manajer, dan mentor perhotelan bintang lima yang berdedikasi dengan satu misi bersama: <strong>mengangkat harkat dan standar kualitas pelayanan industri jasa di Indonesia.</strong></p>

            <p>Kini bertransformasi menjadi lembaga pelatihan profesional terkemuka, GloHC mendampingi sektor perhotelan, rantai restoran, salon wellness &amp; spa, hingga klinik estetika untuk mentransformasi staf menjadi duta layanan yang percaya diri, hangat, dan solutif.</p>

            <blockquote className="about__quote">
              &quot;Kami membentuk ulang cara staf berpikir, bersikap, dan bertutur kata—memastikan setiap tamu hotel, pengunjung restoran, maupun klien klinik merasa diperlakukan layaknya tamu istimewa.&quot;
            </blockquote>

            <div className="value-grid about__value-grid">
              <div className="value-item">
                <div className="value-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <div className="value-item__content">
                  <h4>100% Praktis &amp; Aplikatif</h4>
                  <p>Studi kasus riil, langsung bisa dieksekusi esok hari.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
                  </svg>
                </div>
                <div className="value-item__content">
                  <h4>Kurikulum Fleksibel</h4>
                  <p>Tailor-made untuk hotel, resto, salon wellness, &amp; klinik estetika.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <div className="value-item__content">
                  <h4>Didukung Komunitas</h4>
                  <p>Akses jejaring ekosistem praktisi se-Indonesia.</p>
                </div>
              </div>

              <div className="value-item">
                <div className="value-item__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
                  </svg>
                </div>
                <div className="value-item__content">
                  <h4>Result-Oriented</h4>
                  <p>Mendorong rating positif, retensi, dan omzet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ METHODOLOGY 4 STEPS ═══ */}
      <section className="method" id="framework">
        <div className="container">
          <div className="section-header">
            <span className="pill pill--blue">Metodologi Pelatihan</span>
            <h2>Alur Sederhana Menuju Pelayanan Bintang Lima</h2>
            <p>Pendekatan sistematis 4 langkah GloHC untuk transformasi perilaku staf yang terarah, terukur, dan permanen.</p>
          </div>

          <div className="step-grid">
            <div className="step-card">
              <div className="step-num step-num--default">01</div>
              <h3>Diagnosa &amp; Mindset</h3>
              <p>Mengidentifikasi titik sumbatan operasional dan menanamkan fondasi empati hospitality.</p>
            </div>

            <div className="step-card">
              <div className="step-num step-num--default">02</div>
              <h3>Kalibrasi Standar</h3>
              <p>Penyelarasan etika grooming, intonasi suara, ekspresi mikro, dan bahasa tubuh profesional.</p>
            </div>

            <div className="step-card step-card--active">
              <div className="step-num step-num--active">03</div>
              <h3>Simulasi &amp; Roleplay</h3>
              <p>70% latihan menghadapi tamu sulit, stres rush hour, hingga seni upselling yang elegan.</p>
            </div>

            <div className="step-card">
              <div className="step-num step-num--default">04</div>
              <h3>Eksekusi &amp; Konsistensi</h3>
              <p>Penerapan toolkit briefing harian 10 menit agar standar terjaga setiap shift.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ FEATURED PROGRAM ═══ */}
      <section className="program" id="program">
        <div className="container">
          <div className="program__banner">
            <div className="program__grid">
              <div className="program__info">
                <div className="pill pill--glow">
                  <span className="pill__dot pill__dot--pulse" style={{ background: '#fbbf24' }}></span>
                  COMING SOON — LIMITED SEATS PRIORITY WAITLIST
                </div>

                <h2>Service Excellence: 1-Day Intensive Workshop</h2>

                <p>Workshop intensif satu hari penuh yang dirancang khusus untuk membentuk staf garda depan menjadi pelayan yang tangkas, elegan, dan profesional.</p>

                <div className="program__meta">
                  <div className="program__meta-item">
                    <span className="program__meta-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </span>
                    Durasi: 1 Hari Penuh (09:00 – 17:30)
                  </div>
                  <div className="program__meta-item">
                    <span className="program__meta-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/>
                      </svg>
                    </span>
                    Metode: 30% Teori Aplikatif + 70% Simulasi &amp; Roleplay
                  </div>
                  <div className="program__meta-item">
                    <span className="program__meta-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                    </span>
                    Lokasi: Segera Diumumkan (Prioritas bagi Waitlist)
                  </div>
                </div>

                <div>
                  <a href="#waitlist" className="btn btn--white">
                    Kunci Tempat di Waitlist
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right: syllabus card */}
              <div className="syllabus">
                <h3 className="syllabus__title">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                  </svg>
                  Materi yang Akan Dipelajari:
                </h3>

                <div className="syllabus__list">
                  <div className="syllabus__item">
                    <span className="syllabus__num">1</span>
                    <div>
                      <h4>The Art of Hospitality Mindset</h4>
                      <p>Memahami psikologi tamu dan membangun empati dalam melayani.</p>
                    </div>
                  </div>
                  <div className="syllabus__item">
                    <span className="syllabus__num">2</span>
                    <div>
                      <h4>First Impression &amp; Grooming Standards</h4>
                      <p>Penampilan, bahasa tubuh, dan komunikasi verbal yang memikat.</p>
                    </div>
                  </div>
                  <div className="syllabus__item">
                    <span className="syllabus__num">3</span>
                    <div>
                      <h4>Table &amp; Counter Service Mastery</h4>
                      <p>Teknik servis efisien, flow kerja, dan subtle upselling.</p>
                    </div>
                  </div>
                  <div className="syllabus__item">
                    <span className="syllabus__num">4</span>
                    <div>
                      <h4>Handling Complaints with Grace</h4>
                      <p>Seni meredam emosi tamu dan mengubah mereka menjadi pelanggan setia.</p>
                    </div>
                  </div>
                  <div className="syllabus__item">
                    <span className="syllabus__num">5</span>
                    <div>
                      <h4>Effective Team Briefing &amp; Synergy</h4>
                      <p>Komunikasi tim sebelum dan selama jam operasional.</p>
                    </div>
                  </div>
                </div>

                <div className="syllabus__footer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                  Termasuk: Checklist Grooming, Panduan SOP, &amp; Sertifikat.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ TARGET AUDIENCE ═══ */}
      <section className="audience" id="target">
        <div className="container">
          <div className="section-header">
            <span className="pill pill--blue">Siapa yang Harus Ikut?</span>
            <h2>Dirancang untuk Setiap Garda Depan Industri Jasa</h2>
            <p>Ideal untuk staf operasional, supervisor, hingga manajer yang ingin meng-upgrade standar layanan.</p>
          </div>

          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-card__img">
                <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80" alt="Hotel & Resort" loading="lazy" decoding="async" />
                <span className="audience-card__tag">Luxury Hospitality</span>
              </div>
              <div className="audience-card__body">
                <h3>Perhotelan &amp; Resort</h3>
                <p>Front Office, Resepsionis, Concierge, Housekeeping, Butler, dan Guest Relations di hotel bintang, boutique hotel, dan villa.</p>
                <Link href="/program" className="audience-card__link">
                  Kurikulum Sesuai
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            <div className="audience-card">
              <div className="audience-card__img">
                <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80" alt="Restaurant & Dining" loading="lazy" decoding="async" />
                <span className="audience-card__tag">Dining Excellence</span>
              </div>
              <div className="audience-card__body">
                <h3>Restoran &amp; Fine Dining</h3>
                <p>Pramusaji, Floor Captain, Greeter, Kasir, dan Manajer Operasional restoran, bistro, serta premium café.</p>
                <Link href="/program" className="audience-card__link">
                  Kurikulum Sesuai
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            <div className="audience-card">
              <div className="audience-card__img">
                <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80" alt="Salon & Wellness" loading="lazy" decoding="async" />
                <span className="audience-card__tag">Relaxation &amp; Wellness</span>
              </div>
              <div className="audience-card__body">
                <h3>Salon &amp; Wellness Center</h3>
                <p>Terapis Spa, Hair Stylist, Front Desk, dan Guest Experience di luxury day spa, reflexology, dan barbershop premium.</p>
                <Link href="/program" className="audience-card__link">
                  Kurikulum Sesuai
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            <div className="audience-card">
              <div className="audience-card__img">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80" alt="Klinik Estetika & Kecantikan" loading="lazy" decoding="async" />
                <span className="audience-card__tag">Aesthetic &amp; Beauty</span>
              </div>
              <div className="audience-card__body">
                <h3>Klinik Estetika &amp; Kecantikan</h3>
                <p>Beauty Consultant, Front-liner Medis, Customer Care, dan Perawat Estetika di klinik kecantikan, estetika, dan dental care.</p>
                <Link href="/program" className="audience-card__link">
                  Kurikulum Sesuai
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ COACH BANNER ═══ */}
      <section className="coach" id="coaches">
        <div className="container">
          <div className="coach__banner">
            <div className="coach__grid">
              <div className="coach__photo">
                <Image
                  src="/images/coach-speaker.png"
                  alt="Yayu Windharti - Director of Operation &amp; Master Coach GloHC"
                  width={380}
                  height={420}
                  style={{ objectFit: 'cover', width: '100%', height: 'auto', borderRadius: 'var(--radius-xl)' }}
                />
              </div>

              <div className="coach__copy">
                <div className="coach__badge">
                  <span className="coach__badge-dot"></span>
                  Director of Operation &amp; Master Coach
                </div>
                <h3>Yayu Windharti &amp; Tim Praktisi Senior GloHC</h3>
                <p>Berpengalaman <strong>35+ tahun</strong> memimpin tim operasional di jaringan hotel bintang lima internasional—mulai dari <strong>Hyatt Regency, Sheraton, Sofitel Grand Mahakam, Accor, hingga Grandkemang</strong>. Kini memimpin operasional GloHC untuk mencetak standar layanan berkelas dunia.</p>
                <div className="coach__action" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  <Link href="/master-coach" className="btn btn--white btn--sm">Lihat Rekam Jejak 35+ Tahun &rarr;</Link>
                  <a href="#waitlist" className="btn btn--sm" style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', border: '1px solid rgba(255,255,255,0.35)' }}>Konsultasi Program</a>
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
                    <strong>16 Tahun Director of Operation GloHC</strong>
                    <span>Sejak Nov 2010 mengawal mutu kurikulum nasional</span>
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
                    <span>Terbukti meningkatkan loyalitas &amp; repeat order tamu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ EVENT & NEWS SECTION ═══ */}
      <section className="news" id="news">
        <div className="container">
          <div className="section-header">
            <span className="pill pill--blue">Event &amp; Berita</span>
            <h2>Kabar Terbaru dari GloHC</h2>
            <p>Update terkini seputar event, workshop, artikel tips hospitality, dan perkembangan komunitas GloHC.</p>
          </div>
        </div>

        {/* Marquee slider */}
        <NewsSliderMarquee />
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="pill pill--blue">Tanya Jawab</span>
            <h2>Pertanyaan yang Sering Diajukan</h2>
          </div>

          <FAQAccordion items={homeFaqs} defaultOpenIndex={0} />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ TRAINING SCHEDULE ═══ */}
      <section className="schedule" id="schedule">
        <div className="container">
          <div className="section-header">
            <span className="pill pill--blue">Jadwal Pelatihan</span>
            <h2>Training yang Sedang Berjalan &amp; Akan Datang</h2>
            <p>Pilih batch yang sesuai dengan jadwal Anda. Kursi terbatas untuk menjaga kualitas simulasi per peserta.</p>
          </div>

          <div className="schedule-grid">
            {/* Card 1: Batch 1 */}
            <div className="schedule-card schedule-card--live">
              <div className="schedule-card__header">
                <div className="schedule-card__date">
                  <span className="schedule-card__month">Jan 2027</span>
                  <span className="schedule-card__day">18</span>
                </div>
                <span className="schedule-badge schedule-badge--live">
                  <span className="schedule-badge__dot"></span>
                  Registrasi Dibuka
                </span>
              </div>
              <div className="schedule-card__body">
                <h3 className="schedule-card__title">Service Excellence: 1-Day Intensive Workshop — Batch 1</h3>
                <p className="schedule-card__desc">Workshop intensif satu hari penuh. Materi grooming, hospitality mindset, complaint handling, dan seni upselling berbasis simulasi langsung.</p>
                <div className="schedule-card__meta">
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    09:00 – 17:30 WIB
                  </div>
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Jakarta
                  </div>
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Maks. 30 Peserta
                  </div>
                </div>
              </div>
              <div className="schedule-card__footer">
                <span className="schedule-card__seats"><strong>12 kursi tersisa</strong> dari 30</span>
                <a href="#waitlist" className="btn btn--primary btn--sm">Daftar Sekarang</a>
              </div>
            </div>

            {/* Card 2: Batch 2 */}
            <div className="schedule-card">
              <div className="schedule-card__header">
                <div className="schedule-card__date">
                  <span className="schedule-card__month">Feb 2027</span>
                  <span className="schedule-card__day">22</span>
                </div>
                <span className="schedule-badge schedule-badge--upcoming">
                  Akan Datang
                </span>
              </div>
              <div className="schedule-card__body">
                <h3 className="schedule-card__title">Service Excellence: 1-Day Intensive Workshop — Batch 2</h3>
                <p className="schedule-card__desc">Batch kedua dengan tambahan modul baru: Advanced Upselling Techniques dan Digital Review Management untuk era media sosial.</p>
                <div className="schedule-card__meta">
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    09:00 – 17:30 WIB
                  </div>
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Surabaya
                  </div>
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Maks. 30 Peserta
                  </div>
                </div>
              </div>
              <div className="schedule-card__footer">
                <span className="schedule-card__seats">Kuota penuh tersedia</span>
                <a href="#waitlist" className="btn btn--outline btn--sm">Masuk Waitlist</a>
              </div>
            </div>

            {/* Card 3: In-House */}
            <div className="schedule-card">
              <div className="schedule-card__header">
                <div className="schedule-card__date">
                  <span className="schedule-card__month">Mar 2027</span>
                  <span className="schedule-card__day">15</span>
                </div>
                <span className="schedule-badge schedule-badge--soon">
                  Segera Dibuka
                </span>
              </div>
              <div className="schedule-card__body">
                <h3 className="schedule-card__title">Corporate In-House Training — Custom Program</h3>
                <p className="schedule-card__desc">Pelatihan eksklusif langsung di outlet/hotel Anda. Kurikulum disesuaikan dengan SOP dan brand DNA perusahaan. Termasuk Mystery Guest Audit.</p>
                <div className="schedule-card__meta">
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    1–2 Hari (Fleksibel)
                  </div>
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Di Lokasi Anda
                  </div>
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Tim 10+ Orang
                  </div>
                </div>
              </div>
              <div className="schedule-card__footer">
                <span className="schedule-card__seats">Konsultasi gratis via WhatsApp</span>
                <a href="https://wa.me/6281213269141?text=Halo%20GloHC%2C%20saya%20tertarik%20In-House%20Training" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm">Hubungi Kami</a>
              </div>
            </div>

            {/* Card 4: Batch 3 */}
            <div className="schedule-card">
              <div className="schedule-card__header">
                <div className="schedule-card__date">
                  <span className="schedule-card__month">Apr 2027</span>
                  <span className="schedule-card__day">TBA</span>
                </div>
                <span className="schedule-badge schedule-badge--upcoming">
                  Akan Datang
                </span>
              </div>
              <div className="schedule-card__body">
                <h3 className="schedule-card__title">Service Excellence: 1-Day Intensive Workshop — Batch 3</h3>
                <p className="schedule-card__desc">Batch ketiga menjangkau wilayah Bali &amp; Yogyakarta. Daftar di waitlist untuk mendapatkan pemberitahuan pertama saat jadwal resmi diumumkan.</p>
                <div className="schedule-card__meta">
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    09:00 – 17:30 WIB
                  </div>
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    Bali / Yogyakarta
                  </div>
                  <div className="schedule-card__meta-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                    Maks. 30 Peserta
                  </div>
                </div>
              </div>
              <div className="schedule-card__footer">
                <span className="schedule-card__seats">Jadwal segera diumumkan</span>
                <a href="#waitlist" className="btn btn--outline btn--sm">Masuk Waitlist</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ WAITLIST FORM SECTION ═══ */}
      <section className="waitlist" id="waitlist">
        <div className="container waitlist__inner">
          <div className="waitlist__copy">
            <span className="pill pill--blue">Investasi Pada Layanan</span>
            <h2>Amankan Posisi Anda di Daftar Tunggu Prioritas.</h2>
            <p>Jumlah kursi setiap batch dibatasi ketat agar setiap peserta mendapatkan kesempatan roleplay simulasi secara intensif bersama master coach.</p>

            <div className="waitlist__checks">
              <div className="waitlist__check">
                <span className="waitlist__check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                Akses prioritas booking sebelum dibuka ke publik
              </div>
              <div className="waitlist__check">
                <span className="waitlist__check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                Kunci potongan biaya Early Bird 35%
              </div>
              <div className="waitlist__check">
                <span className="waitlist__check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                Bonus Starter Kit: Checklist Grooming &amp; SOP Komplain
              </div>
              <div className="waitlist__check">
                <span className="waitlist__check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                Gratis konsultasi kebutuhan training via WhatsApp
              </div>
            </div>

            <div className="waitlist__tip">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
              </svg>
              <span><strong>Diri Anda di masa depan akan berterima kasih:</strong> Satu perbaikan kecil pada keramahan staf dapat menggandakan loyalitas tamu seumur hidup.</span>
            </div>
          </div>

          <WaitlistForm />
        </div>
      </section>
    </main>
  );
}
