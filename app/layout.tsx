import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { GeistSans } from 'geist/font/sans';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
