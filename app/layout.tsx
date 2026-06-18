import type { Metadata } from 'next';
import { Playfair_Display, Lato } from 'next/font/google';
import './globals.css';
import PageLayout from '@/components/templates/PageLayout';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Rurache — Productos Artesanales de Ruben Rachetti',
  description:
    'Licores, limoncello, mermeladas y conservas artesanales hechos con pasión en Hurlingham, Buenos Aires. Pedidos por WhatsApp.',
  keywords: ['licores artesanales', 'mermeladas caseras', 'Hurlingham', 'Buenos Aires', 'Rurache', 'Ruben Rachetti'],
  authors: [{ name: 'Ruben Rachetti' }],
  openGraph: {
    title: 'Rurache — Productos Artesanales',
    description: 'Sabores caseros hechos con amor en Hurlingham, Buenos Aires.',
    locale: 'es_AR',
    type: 'website',
    siteName: 'Rurache',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
