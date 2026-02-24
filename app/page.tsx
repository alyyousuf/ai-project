import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-4">AI Project</h1>
      <p className="mb-6">Minimal Next.js + Tailwind scaffold with simple project generator.</p>
      <div className="space-x-3">
        <Link href="/dashboard" className="text-blue-600">Dashboard</Link>
      </div>
    </div>
  )
}
