import { ReactNode } from 'react';
import Topbar from './Topbar';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from '../WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Topbar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
