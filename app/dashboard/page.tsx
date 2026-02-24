import Link from 'next/link'
import { projects } from '@/lib/store'

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold mb-6">Dashboard</h2>
      <div className="space-y-4">
        {projects.length === 0 ? (
          <div>No projects yet.</div>
        ) : (
          projects.map((p) => (
            <div key={p.id} className="p-4 border rounded">
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-slate-600">{p.idea}</p>
              <Link href={`/projects/${p.id}`} className="text-blue-600 text-sm">View</Link>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
