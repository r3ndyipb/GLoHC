import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, whatsapp, businessName, businessType, participantCount } = body;

    console.log('📋 New Waitlist Registration (Next.js):', {
      name,
      whatsapp,
      businessName,
      businessType,
      participantCount,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Pendaftaran waitlist berhasil!',
      data: { name, whatsapp, businessName, businessType, participantCount },
    });
  } catch (error) {
    console.error('Waitlist API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Gagal memproses pendaftaran waitlist.' },
      { status: 400 }
    );
  }
}

