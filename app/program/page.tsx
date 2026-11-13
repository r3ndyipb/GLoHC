import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import SectionDivider from '@/components/SectionDivider';

export const metadata: Metadata = {
  title: 'Program Pelatihan & Sertifikasi Hospitality | GloHC Indonesia',
  description:
    'Kurikulum Service Excellence teruji untuk tim perhotelan, restoran, salon wellness, dan klinik estetika di Indonesia bersama para praktisi bintang lima.',
  openGraph: {
    title: 'Program Pelatihan & Sertifikasi Hospitality | GloHC Indonesia',
    description:
      'Kurikulum teruji standar hotel bintang lima untuk tim perhotelan, restoran, salon wellness, dan klinik estetika di Indonesia.',
    url: 'https://glohc.id/program',
  },
};

export default function ProgramPage() {
  return (
    <main>
      {/* ═══ PAGE HEADER ═══ */}
      <div className="page-header">
        <div className="container page-header__inner">
          <h1>Program Pelatihan Service Excellence &amp; Leadership</h1>
          <p>
            Kurikulum spesifik berstandar bintang lima untuk mentransformasi staf perhotelan, restoran, salon wellness, dan klinik estetika menjadi duta layanan yang percaya diri, ramah, dan solutif.
          </p>
        </div>
      </div>

      <SectionDivider />

      {/* ═══ PROGRAM HIGHLIGHT BANNER ═══ */}
      <section className="program" style={{ padding: 'var(--section-py) 0', background: '#fff' }}>
        <div className="container">
          <div className="program__banner">
            <div className="program__grid">
              <div className="program__info">
                <span className="pill pill--glow">Unggulan GloHC</span>
                <h2>1-Day Service Excellence Masterclass</h2>
                <p>
                  Workshop intensif 8 jam yang membekali tim Anda dengan standar komunikasi, bahasa tubuh profesional, serta kesiapan mental menghadapi situasi operasional tersulit.
                </p>
                <p style={{ fontSize: '0.8125rem', opacity: 0.9, marginTop: '-0.5rem' }}>
                  <strong>Lead Trainer:</strong> Yayu Windharti (Director of Operation GloHC · 35+ Tahun Veteran Hyatt Regency, Sheraton, Sofitel Grand Mahakam).
                </p>

                <div className="program__highlights">
                  <div className="program__hl">
                    <div className="program__hl-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>70% Simulasi Kasus Riil &amp; Roleplay Meja</span>
                  </div>

                  <div className="program__hl">
                    <div className="program__hl-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Template SOP &amp; Service Checklist Siap Pakai</span>
                  </div>

                  <div className="program__hl">
                    <div className="program__hl-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span>Sertifikat Kelulusan Resmi Terverifikasi</span>
                  </div>
                </div>

                <div>
                  <Link href="/#waitlist" className="btn btn--white">
                    Daftarkan Tim Anda
                  </Link>
                </div>
              </div>

              <div className="program__syllabus">
                <h3>Silabus 5 Modul Utama</h3>
                <div className="syllabus-list">
                  <div className="syllabus-item">
                    <div className="syllabus-item__num">01</div>
                    <div>
                      <h4>Mindset &amp; Hospitality DNA</h4>
                      <p>Membangun kesadaran bahwa layanan adalah relasi berharga, bukan sekadar kewajiban transaksi.</p>
                    </div>
                  </div>

                  <div className="syllabus-item">
                    <div className="syllabus-item__num">02</div>
                    <div>
                      <h4>First Impression &amp; Grooming</h4>
                      <p>3 detik pertama: postur, kontak mata, intonasi suara, dan kehangatan sambutan autentik.</p>
                    </div>
                  </div>

                  <div className="syllabus-item">
                    <div className="syllabus-item__num">03</div>
                    <div>
                      <h4>Handling Complaints (HEAR Method)</h4>
                      <p>Hear, Empathize, Apologize, Resolve. Mengubah komplain kritis menjadi loyalitas seumur hidup.</p>
                    </div>
                  </div>

                  <div className="syllabus-item">
                    <div className="syllabus-item__num">04</div>
                    <div>
                      <h4>Suggestive Selling &amp; Upselling</h4>
                      <p>Meningkatkan rata-rata belanja tamu tanpa terkesan memaksa atau mengganggu kenyamanan.</p>
                    </div>
                  </div>

                  <div className="syllabus-item">
                    <div className="syllabus-item__num">05</div>
                    <div>
                      <h4>Supervisory &amp; Team Culture</h4>
                      <p>Cara supervisor menjaga konsistensi standar layanan setiap shift tanpa harus selalu mengawasi.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ FORMAT PILIHAN PELATIHAN ═══ */}
      <section className="framework" style={{ padding: 'var(--section-py) 0', background: '#fff' }}>
        <div className="container">
          <div className="section-header">
            <span className="pill pill--blue">Format Pelaksanaan</span>
            <h2>3 Pilihan Format Pelatihan</h2>
            <p>Kami menyesuaikan metode pelatihan dengan skala dan ritme operasional bisnis Anda.</p>
          </div>

          <div className="format-grid">
            {/* Format 1: In-House Training */}
            <div className="format-card format-card--featured">
              <div className="format-card__badge">Paling Populer untuk Outlet</div>
              <div className="format-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
                </svg>
              </div>
              <h3>In-House Training</h3>
              <p>Pelatihan privat khusus tim Anda, diadakan langsung di lokasi hotel, restoran, salon wellness, atau klinik estetika Anda dengan kurikulum yang diadaptasi sesuai SOP spesifik.</p>
              <div className="format-card__list">
                <div className="format-card__item">
                  <span className="format-card__item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Jadwal fleksibel menyesuaikan operasional shift</span>
                </div>
                <div className="format-card__item">
                  <span className="format-card__item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Simulasi langsung pada denah &amp; layout outlet asli</span>
                </div>
                <div className="format-card__item">
                  <span className="format-card__item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Pre-audit SOP eksisting sebelum workshop</span>
                </div>
              </div>
              <Link href="/#waitlist" className="btn btn--primary btn--sm" style={{ width: '100%', justifyContent: 'center' }}>
                Konsultasi In-House &rarr;
              </Link>
            </div>

            {/* Format 2: Public Batch Workshop */}
            <div className="format-card">
              <div className="format-card__badge" style={{ background: 'var(--slate-100)', color: 'var(--slate-700)' }}>Ideal 2-5 Staf Kunci</div>
              <div className="format-card__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>Public Batch Workshop</h3>
              <p>Workshop intensif berkala lintas brand di hotel bintang lima. Solusi efisien untuk melatih supervisor hotel, floor captain resto, head therapist spa, dan beauty consultant klinik.</p>
              <div className="format-card__list">
                <div className="format-card__item">
                  <span className="format-card__item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Networking antar pimpinan hotel, resto, salon &amp; klinik se-Indonesia</span>
                </div>
                <div className="format-card__item">
                  <span className="format-card__item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Fasilitas hotel bintang 5 &amp; lunch buffet premium</span>
                </div>
                <div className="format-card__item">
                  <span className="format-card__item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Kuota terbatas 25 peserta untuk kualitas simulasi</span>
                </div>
              </div>
              <Link href="/jadwal" className="btn btn--outline btn--sm" style={{ width: '100%', justifyContent: 'center' }}>
                Lihat Kalender Batch &rarr;
              </Link>
            </div>

            {/* Format 3: Consulting & Mystery Audit */}
            <div className="format-card">
              <div className="format-card__badge" style={{ background: 'var(--purple-50)', color: 'var(--purple-700)' }}>Solusi Komprehensif</div>
              <div className="format-card__icon" style={{ background: 'var(--purple-50)', color: 'var(--purple-600)', borderColor: 'var(--purple-100)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h3>Consulting &amp; Mystery Audit</h3>
              <p>Pendampingan menyeluruh mencakup mystery guest audit, formulasi Service Blue-Print custom, dan pemantauan retensi mutu 30 hari.</p>
              <div className="format-card__list">
                <div className="format-card__item">
                  <span className="format-card__item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Laporan audit kepatuhan berbasis skor metrik</span>
                </div>
                <div className="format-card__item">
                  <span className="format-card__item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Buku Saku SOP Service Excellence berlisensi</span>
                </div>
                <div className="format-card__item">
                  <span className="format-card__item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span>Review pasca-training bersama jajaran direksi</span>
                </div>
              </div>
              <a href="https://wa.me/6281213269141?text=Halo%20GloHC%20Saya%20tertarik%20konsultasi%20mystery%20audit" target="_blank" rel="noopener noreferrer" className="btn btn--outline btn--sm" style={{ width: '100%', justifyContent: 'center' }}>
                Diskusi Audit &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ═══ CTA SECTION ═══ */}
      <section className="waitlist" id="waitlist" style={{ padding: 'var(--section-py) 0', background: 'var(--blue-50)' }}>
        <div className="container">
          <div className="waitlist__inner" style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: '680px', margin: '0 auto' }}>
            <div className="waitlist__copy">
              <span className="pill pill--blue" style={{ margin: '0 auto' }}>Konsultasi Gratis</span>
              <h2>Diskusikan Kebutuhan Training Tim Anda Bersama Kami</h2>
              <p>Dapatkan silabus lengkap dan penawaran khusus untuk tim hotel, restoran, salon wellness, atau klinik estetika Anda.</p>
              <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/#waitlist" className="btn btn--primary">
                  Daftar Waitlist Batch 1
                </Link>
                <a
                  href="https://wa.me/6281213269141?text=Halo%20GloHC%20Saya%20tertarik%20dengan%20program%20pelatihan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Tanya via WhatsApp (+62 812-1326-9141)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
