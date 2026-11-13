'use client';

import React, { useState } from 'react';

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    businessName: '',
    businessType: 'Perhotelan & Resort',
    participantCount: '1 Orang (Individu)',
  });

  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState('https://wa.me/6281213269141');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const waPhone = '6281213269141';
    const message =
      `Halo GloHC, saya ingin mendaftar Formulir Waitlist Eksklusif Batch 1:\n\n` +
      `• Nama Lengkap: ${formData.name}\n` +
      `• No. WhatsApp: ${formData.whatsapp}\n` +
      `• Nama Usaha / Brand: ${formData.businessName || '-'}\n` +
      `• Tipe Bisnis: ${formData.businessType}\n` +
      `• Rencana Jumlah Peserta: ${formData.participantCount}\n\n` +
      `Mohon konfirmasi jadwal resmi & penawaran kursi prioritasnya. Terima kasih!`;

    const generatedWaUrl = `https://wa.me/${waPhone}?text=${encodeURIComponent(message)}`;
    setWaLink(generatedWaUrl);
    setSubmitted(true);

    // Call API route
    try {
      await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error('Waitlist API error:', err);
    } finally {
      setIsSubmitting(false);
    }

    // Open WhatsApp in new window
    window.open(generatedWaUrl, '_blank');
  };

  return (
    <div className="waitlist__card">
      <form onSubmit={handleSubmit} className="waitlist__form">
        <div className="form-group">
          <label className="form-label" htmlFor="name">Nama Lengkap &amp; Gelar</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Contoh: Budi Pratama, S.E."
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="whatsapp">Nomor WhatsApp Aktif</label>
          <input
            type="tel"
            id="whatsapp"
            name="whatsapp"
            required
            placeholder="Contoh: 0812-1326-9141"
            className="form-input"
            value={formData.whatsapp}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="businessName">Nama Usaha / Brand</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              placeholder="Contoh: Grand Hotel / Resto Nusantara / Glow Clinic"
              className="form-input"
              value={formData.businessName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="businessType">Tipe Bisnis</label>
            <select
              id="businessType"
              name="businessType"
              className="form-select"
              value={formData.businessType}
              onChange={handleChange}
            >
              <option value="Perhotelan & Resort">Perhotelan &amp; Resort</option>
              <option value="Restoran & Dining">Restoran &amp; Dining</option>
              <option value="Salon & Wellness">Salon &amp; Wellness</option>
              <option value="Klinik Estetika & Kecantikan">Klinik Estetika &amp; Kecantikan</option>
              <option value="Lainnya / Korporat Jasa">Lainnya / Korporat Jasa</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="participantCount">Rencana Jumlah Peserta</label>
          <select
            id="participantCount"
            name="participantCount"
            className="form-select"
            value={formData.participantCount}
            onChange={handleChange}
          >
            <option value="1 Orang (Individu)">1 Orang (Individu)</option>
            <option value="2-4 Orang (Tim Operasional)">2-4 Orang (Tim Operasional)</option>
            <option value="5-10 Orang (Cabang/Outlet)">5-10 Orang (Cabang/Outlet)</option>
            <option value=">10 Orang (Corporate In-House)">&gt;10 Orang (Corporate In-House)</option>
          </select>
        </div>

        <div className="form-submit">
          <button type="submit" disabled={isSubmitting} className="btn btn--primary btn--full btn--lg">
            <span>{isSubmitting ? 'Memproses...' : 'Kunci Kursi Waitlist Sekarang'}</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
            </svg>
          </button>
        </div>

        <p className="form-privacy">
          🔒 Data Anda aman 100%. Hanya digunakan untuk notifikasi resmi jadwal &amp; kupon prioritas batch 1.
        </p>

        <div style={{ textAlign: 'center', marginTop: '1rem', paddingTop: '0.875rem', borderTop: '1px dashed var(--slate-200)' }}>
          <p style={{ fontSize: '0.8125rem', color: 'var(--slate-500)', marginBottom: '0.375rem' }}>
            Atau ingin tanya-tanya langsung ke tim kami?
          </p>
          <a
            href="https://wa.me/6281213269141?text=Halo%20GloHC%2C%20saya%20ingin%20konsultasi%20mengenai%20Waitlist%20Eksklusif%20Batch%201"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--outline btn--sm"
            style={{ width: '100%', justifyContent: 'center', gap: '0.5rem', fontWeight: 600 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
            Chat WhatsApp (+62 812-1326-9141)
          </a>
        </div>
      </form>

      {/* Success overlay modal */}
      <div className={`form-success ${submitted ? 'visible' : ''}`} id="formSuccess">
        <div className="form-success__icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <h4>Selamat! Anda Telah Terdaftar</h4>
        <p>
          Data Anda telah tercatat. Kami menghubungkan Anda langsung ke WhatsApp resmi GloHC (+62 812-1326-9141) untuk konfirmasi prioritas.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', width: '100%', maxWidth: '280px', marginTop: '0.5rem' }}>
          <a
            id="waDirectBtn"
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary btn--sm"
            style={{ justifyContent: 'center' }}
          >
            Lanjut ke WhatsApp &rarr;
          </a>
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => setSubmitted(false)}
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

