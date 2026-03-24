import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Miatapedia — The MX-5 Encyclopedia',
    template: '%s | Miatapedia',
  },
  description: 'The most comprehensive resource on the Mazda MX-5 / Miata / Eunos Roadster. Four generations, hundreds of special editions, complete specs, buying guides, and technical resources.',
  metadataBase: new URL('https://miatapedia.info'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
