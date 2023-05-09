import '@/styles/globals.css';

import { Inter } from 'next/font/google';

import getCurrentUser from '@/app/actions/getCurrentUser';
import { ClientOnly } from '@/components/ClientOnly/ClientOnly';
import MainFooter from '@/components/Footer';
import Header from '@/components/Header';
import LoginModal from '@/components/Modals/LoginModal';
import RegisterModal from '@/components/Modals/RegisterModal';
import ToasterProvider from '@/providers/ToasterProvider';
import type { ChildrenProps } from '@/types';

export const metadata = {
  title: 'Home | Next.js + TypeScript Starter',
  description: 'Next.js + TypeScript + Tailwind CSS ',
};

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'optional',
});

export default async function RootLayout({ children }: ChildrenProps) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body
        className={`${inter.className} h-full flex flex-col justify-between`}
      >
        <ClientOnly>
          <Header currentUser={currentUser} />
          <RegisterModal />
          <LoginModal />
          <ToasterProvider />
        </ClientOnly>
        <section className="flex-1">{children}</section>
        <MainFooter />
      </body>
    </html>
  );
}
