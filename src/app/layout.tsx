// /src/app/layout.tsx
import type { Metadata } from 'next';
import { Varela_Round, Dela_Gothic_One, Danfo, Roboto_Slab, Sour_Gummy, Special_Gothic_Expanded_One} from 'next/font/google';
import './globals.css';

// Configure fonts
const specialGothicExpandedOne = Special_Gothic_Expanded_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-special',
});

const delaGothicOne = Dela_Gothic_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dela',
});

export const metadata: Metadata = {
  title: 'Transformer AI Archive',
  description: 'Explore the history of Transformer AI models',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${delaGothicOne.variable} ${specialGothicExpandedOne.variable}`}>
      <body style={{ fontFamily: 'var(--font-dela)' }}>
        {children}
      </body>
    </html>
  );
}