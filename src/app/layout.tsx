import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ApolloWrapper } from '@/lib/ApolloWrapper'
const inter = Inter({ subsets: ['latin'] })

// import { client } from '@/lib/ApolloClient';


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <ApolloWrapper>
          {children}
        </ApolloWrapper>
       
      </body>
    </html>
  )
}
