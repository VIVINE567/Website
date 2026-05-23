import './globals.css';
import AppShell from './AppShell';

export const metadata = {
  title: 'VIVINE International - Hydrocolloid Solutions',
  icons: {
    icon: '/thumbnail.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
