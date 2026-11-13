import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import SectionDivider from '@/components/SectionDivider';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Pertanyaan yang Sering Diajukan (FAQ)',
  description: 'Informasi lengkap seputar metode 70% simulasi roleplay GloHC, kurikulum, jadwal batch, sertifikasi kelulusan, dan opsi in-house training hotel, resto, salon & klinik estetika.',
};

const fullFAQList = [
  {
    q: 'Siapa saja yang paling cocok mengikuti pelatihan GloHC?',
    a: 'Program kami dirancang khusus untuk staf garis depan (resepsionis hotel, concierge, guest relations, floor captain & server resto, beauty consultant, terapis salon & spa, hingga customer service klinik estetika) serta level supervisor dan operational manager di industri perhotelan, restoran & dining, salon wellness, dan klinik estetika yang ingin menstandarisasi mutu keramahan timnya.',
  },
  {
    q: 'Apa yang membedakan GloHC dengan pelatihan customer service biasa?',
    a: 'Sebagian besar seminar hanya 90% ceramah motivasi yang mudah dilupakan dalam 3 hari. Di GloHC, kami menerapkan formula 70% simulasi & roleplay meja nyata dan 30% teori taktis. Setiap peserta dipaksa berlatih langsung menghadapi situasi riil (tamu komplain, pesanan tumpah, peak hour) hingga terbentuk refleks otot dan mentalitas profesional.',
  },
  {
    q: 'Apakah pelatihan bisa diadakan langsung di outlet / properti kami (In-House)?',
    a: 'Tentu bisa! Lebih dari 60% klien kami memilih format In-House Training. Master Coach GloHC akan hadir langsung di properti hotel, restoran, salon wellness, atau klinik estetika Anda. Kami akan melakukan pre-audit singkat untuk menyesuaikan modul dengan layout fisik tempat dan SOP operasional spesifik bisnis Anda.',
  },
  {
    q: 'Berapa lama durasi workshop dan berapa peserta per batch?',
    a: 'Untuk Public Workshop, program berlangsung intensif selama 1 hingga 2 hari penuh (pukul 09.00 - 17.00). Kuota per batch dibatasi secara ketat maksimal 25 peserta agar setiap orang mendapatkan giliran simulasi meja dan evaluasi personal dari Master Coach.',
  },
  {
    q: 'Apakah peserta mendapatkan sertifikat resmi kelulusan?',
    a: 'Ya, seluruh peserta yang menyelesaikan sesi simulasi dan evaluasi akan memperoleh Sertifikat Kompetensi Resmi dari Global Hospitality Coach (GloHC) dengan ID verifikasi digital yang dapat dicantumkan pada portofolio karier profesional mereka.',
  },
  {
    q: 'Apakah ada diskon untuk pendaftaran kelompok atau corporate?',
    a: 'Tentu ada. Kami menyediakan paket Group Booking (minimal 3 atau 5 staf) dengan potongan harga khusus hingga 25%, serta paket korporat multi-cabang. Silakan hubungi tim advisor kami untuk konsultasi penawaran terbaik.',
  },
  {
    q: 'Bagaimana cara mendaftar atau mengamankan kursi di Batch 1?',
    a: 'Cukup isi formulir waitlist di halaman utama website ini atau klik tombol "Join Waitlist". Tim kami akan menghubungi Anda melalui WhatsApp dalam 1x24 jam untuk mengirimkan silabus detail, jadwal konfirmasi, dan faktur pendaftaran.',
  },
];

export default function FAQPage() {
  return (
    <main>
      {/* ═══ PAGE HEADER ═══ */}
      <div className="page-header">
        <div className="container page-header__inner">
          <h1>Pertanyaan yang Sering Diajukan (FAQ)</h1>
          <p>
            Semua informasi penting seputar metode belajar 70% simulasi, silabus materi, jadwal batch, sertifikasi, hingga opsi in-house training.
          </p>
        </div>
      </div>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ FAQ SECTION ═══ */}
      <section className="faq" style={{ padding: 'var(--section-py) 0', background: '#fff' }}>
        <div className="container">
          <FAQAccordion items={fullFAQList} defaultOpenIndex={0} />
        </div>
      </section>

      {/* Section Divider */}
      <SectionDivider />

      {/* ═══ STILL HAVE QUESTIONS BANNER ═══ */}
      <section className="about" style={{ background: 'var(--slate-50)', padding: 'var(--section-py) 0' }}>
        <div className="container">
          <div
            style={{
              maxWidth: '780px',
              margin: '0 auto',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1.25rem',
              background: 'linear-gradient(135deg, var(--blue-50) 0%, #ffffff 100%)',
              border: '1px solid var(--blue-200)',
              borderRadius: 'var(--radius-2xl)',
              padding: '3rem 2rem',
              boxShadow: '0 12px 36px rgba(12,135,235,0.06)',
            }}
          >
            <div
              style={{
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--blue-100)',
                color: 'var(--blue-600)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--blue-200)',
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h2 style={{ fontSize: '1.875rem', fontWeight: 800, color: 'var(--slate-900)', letterSpacing: '-0.02em' }}>
              Masih Memiliki Pertanyaan Spesifik?
            </h2>
            <p style={{ color: 'var(--slate-500)', lineHeight: 1.65, maxWidth: '560px' }}>
              Tim konsultan hospitality GloHC siap berdiskusi langsung mengenai kebutuhan unik operasional hotel, restoran, salon wellness, maupun klinik estetika Anda.
            </p>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <a
                href="https://wa.me/6281213269141?text=Halo%20GloHC%20Saya%20ingin%20bertanya%20seputar%20pelatihan"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                Konsultasi via WhatsApp (+62 812-1326-9141) &rarr;
              </a>
              <Link href="/#waitlist" className="btn btn--outline">
                Daftar Form Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
