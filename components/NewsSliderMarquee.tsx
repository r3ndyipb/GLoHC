import React from 'react';

interface NewsItem {
  tag: string;
  tagType: 'event' | 'news' | 'update';
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    tag: 'Event',
    tagType: 'event',
    title: 'Grand Launch: Service Excellence Workshop Batch 1 Resmi Dibuka',
    excerpt: 'Setelah persiapan intensif, GloHC resmi membuka pendaftaran workshop yang dirancang langsung bersama para praktisi bintang lima Indonesia.',
    date: '12 November 2026',
    readTime: '5 menit baca',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Tips Layanan',
    tagType: 'news',
    title: '5 Celah Fatal Pelayanan yang Memicu Tamu Pergi Tanpa Mengeluh',
    excerpt: 'Bedah micro-expressions, respons pasif staf, dan lambatnya koordinasi saat jam sibuk yang diam-diam mengikis repeat order bisnis.',
    date: '8 November 2026',
    readTime: '3 menit baca',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Kemitraan',
    tagType: 'update',
    title: 'GloHC Jalin Kolaborasi Nasional Standardisasi Service Excellence',
    excerpt: 'Sinergi kurikulum frontliner untuk jaringan perhotelan, restoran, salon wellness, dan klinik estetika di Indonesia demi budaya layanan prima.',
    date: '1 November 2026',
    readTime: '4 menit baca',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Webinar Eksklusif',
    tagType: 'event',
    title: 'Membangun Budaya Layanan Prima pada Tim Operasional Rintisan',
    excerpt: 'Metode briefing 10 menit, roleplay komplain, dan kepemimpinan agar staf bekerja proaktif tanpa terus bergantung manajer.',
    date: '25 Oktober 2026',
    readTime: 'Online Workshop',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
  },
  {
    tag: 'Riset Industri',
    tagType: 'news',
    title: 'Mengapa First Impression 3 Detik Menentukan Persepsi Kualitas Brand',
    excerpt: 'Tinjauan psikologi konsumen terhadap kerapian grooming dan senyum tulus yang memvalidasi harga premium produk Anda.',
    date: '18 Oktober 2026',
    readTime: '5 menit baca',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=600&q=80',
  },
];

export default function NewsSliderMarquee() {
  return (
    <div className="news-slider">
      <div className="news-slider__track">
        {/* Set 1 */}
        {newsData.map((item, idx) => (
          <article key={`news-1-${idx}`} className="news-card">
            <div className="news-card__img">
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <span className={`news-card__tag news-card__tag--${item.tagType}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                {item.tag}
              </span>
            </div>
            <div className="news-card__body">
              <h3 className="news-card__title">{item.title}</h3>
              <p className="news-card__excerpt">{item.excerpt}</p>
              <div className="news-card__meta">
                <div className="news-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>{item.date}</span>
                </div>
                <span className="news-card__sep">•</span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </article>
        ))}

        {/* Set 2 (for seamless loop) */}
        {newsData.map((item, idx) => (
          <article key={`news-2-${idx}`} className="news-card" aria-hidden="true">
            <div className="news-card__img">
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
              <span className={`news-card__tag news-card__tag--${item.tagType}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
                {item.tag}
              </span>
            </div>
            <div className="news-card__body">
              <h3 className="news-card__title">{item.title}</h3>
              <p className="news-card__excerpt">{item.excerpt}</p>
              <div className="news-card__meta">
                <div className="news-card__meta-item">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>{item.date}</span>
                </div>
                <span className="news-card__sep">•</span>
                <span>{item.readTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

