import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Anandkumar NS',
  description: 'Created by Anandkumar NS',
}

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}