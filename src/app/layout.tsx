import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], weight: ['500', '600', '700'] })

export const metadata = {
  title: 'CuponsGenerator',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secundary`}>
        <Header />
        <div className='flex flex-col items-center justify-center'>
          {children}
        </div>
      </body>
    </html>
  )
}
