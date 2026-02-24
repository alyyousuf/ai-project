import './globals.css'
import React from 'react'

export const metadata = {
  title: 'AI Project'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-gray-50 text-slate-900">{children}</main>
      </body>
    </html>
  )
}
