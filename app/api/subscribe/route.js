import { NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export async function POST(request) {
  try {
    const { email } = await request.json();
    
    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Geçersiz e-posta adresi.' }, { status: 400 });
    }
    
    // Aynı e-posta daha önce abone olmuş mu kontrol et
    const q = query(collection(db, 'subscribers'), where('email', '==', email));
    const existing = await getDocs(q);
    
    if (!existing.empty) {
      return NextResponse.json({ error: 'Bu e-posta adresi zaten bültene kayıtlı.' }, { status: 409 });
    }
    
    // Yeni aboneyi veritabanına ekle
    await addDoc(collection(db, 'subscribers'), {
      email,
      subscribedAt: new Date(),
      active: true,
    });
    
    return NextResponse.json({ success: true, message: 'Bültene başarıyla abone oldunuz! 🎉' });
  } catch (error) {
    return NextResponse.json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' }, { status: 500 });
  }
}
