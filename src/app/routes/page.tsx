import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="py-16 flex flex-col items-center text-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden mb-8">
          <Image 
            src="/profile.jpg" 
            alt="Eren Keskinoglu" 
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Eren Keskinoglu</h1>
        <p className="text-xl max-w-2xl mb-8">
          Buraya kendini tanıtan bir cümle. page.tsx dosyasında.
        </p>
        <div className="flex gap-4">
          <Link href="/about" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            Hakkımda
          </Link>
          <Link href="/projects" className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-md">
            Projelerim
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Öne Çıkan Projeler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will be added here */}
          <div className="border rounded-lg overflow-hidden shadow-md">
            <div className="h-48 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Proje 1</h3>
              <p className="text-gray-600 mb-4">Proje açıklaması burada yer alacak.</p>
              <Link href="/projects/proje-1" className="text-blue-600 hover:underline">Detayları Gör</Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/projects" className="text-blue-600 hover:underline">Tüm Projeleri Gör</Link>
        </div>
      </section>

      {/* Interactive Tools Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">İnteraktif Araçlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/tools/killer-sudoku-helper" className="block border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Killer Sudoku Helper</h3>
                <p className="text-gray-600">Killer Sudoku bulmacalarını çözmenize yardımcı olacak interaktif bir araç.</p>
              </div>
            </Link>
            <Link href="/tools/crypto-analyzer" className="block border rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">Crypto Analyzer</h3>
                <p className="text-gray-600">Kripto para piyasasını analiz etmenize yardımcı olacak interaktif bir araç.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Art Corner Preview */}
      <section className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Sanat Köşesi</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Link href="/media/books" className="block text-center p-4 border rounded-lg hover:bg-gray-50">
            <div className="text-4xl mb-2">📚</div>
            <span>Kitaplar</span>
          </Link>
          <Link href="/media/movies" className="block text-center p-4 border rounded-lg hover:bg-gray-50">
            <div className="text-4xl mb-2">🎬</div>
            <span>Filmler</span>
          </Link>
          <Link href="/media/games" className="block text-center p-4 border rounded-lg hover:bg-gray-50">
            <div className="text-4xl mb-2">🎮</div>
            <span>Oyunlar</span>
          </Link>
          <Link href="/media/podcasts" className="block text-center p-4 border rounded-lg hover:bg-gray-50">
            <div className="text-4xl mb-2">🎙️</div>
            <span>Podcast'ler</span>
          </Link>
          <Link href="/media/musics" className="block text-center p-4 border rounded-lg hover:bg-gray-50">
            <div className="text-4xl mb-2">🎵</div>
            <span>Müzikler</span>
          </Link>
          <Link href="/media/paintings" className="block text-center p-4 border rounded-lg hover:bg-gray-50">
            <div className="text-4xl mb-2">🎨</div>
            <span>Resimler</span>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">İletişime Geçin</h2>
          <p className="mb-8">Projelerim veya işbirliği fırsatları hakkında konuşmak ister misiniz?</p>
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md">
            İletişim
          </Link>
        </div>
      </section>
    </div>
  );
} 