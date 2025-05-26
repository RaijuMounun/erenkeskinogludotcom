import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CursorFollower from '../components/cursor/CursorFollower';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Eren Keskinoglu',
  description: 'Kişisel web sitesi ve portföy',
};

export default function RootLayout({children,}: {children: React.ReactNode;}) 
{
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CursorFollower size={20} delay={0.05} />
        </Providers>
      </body>
    </html>
  );
}
