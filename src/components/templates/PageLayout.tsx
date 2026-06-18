import React from 'react';
import Navbar from '@/components/organisms/Navbar';
import Footer from '@/components/organisms/Footer';
import WhatsappFab from '@/components/atoms/WhatsappFab';

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col min-h-screen">
        {children}
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
