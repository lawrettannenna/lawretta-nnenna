import './globals.css'
import { Roboto } from 'next/font/google'

const roboto = Roboto({ 
  weight: '400',
  subsets: ['latin']

 });

export const metadata = {
  title: 'Lawretta Nnenna - Programme Officer.',
  description: 'The Official website of Lawretta Nnenna',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <title>'Lawretta Nnenna - Programme Officer</title>
        <meta
          property='og:title'
          content=' =Lawretta Nnenna - Programme Officer'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://lawrettannenna.com' />
        <meta property='og:description' content='Programme Officer.' />
        <meta property='og:site_name' content='LawrettaNnenna' />
        <link
          href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css'
          rel='stylesheet'
        />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <meta name='robots' content='index, follow'></meta>
        <meta name='robots' content='all'></meta>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
};