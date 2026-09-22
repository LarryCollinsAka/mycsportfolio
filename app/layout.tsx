import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lateh Larry-Collins | Customer Service & Technical Support Specialist',
  description: 'Bilingual EN/FR Customer Service & Technical Support Specialist in Yaoundé, Cameroon. 6+ years, 80+ interactions/shift, 90%+ CSAT.',
}

export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
