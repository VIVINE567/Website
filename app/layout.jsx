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
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Cinzel:wght@400;600;700&family=Raleway:wght@300;400;500;600&family=Montserrat:wght@400;500;600;700;800;900&family=Roboto:wght@400;500;700&family=Oswald:wght@400;500;600;700&display=swap"
        />
      </head> */}
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
