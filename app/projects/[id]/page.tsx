import { projects } from '@/lib/store'

interface Props {
  params: { id: string }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return <div className="p-6">Project not found.</div>
  }

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
      <p className="text-sm text-slate-600 mb-4">{project.idea}</p>
      <pre className="bg-slate-100 p-4 rounded">{JSON.stringify(project, null, 2)}</pre>
    </div>
  )
}
