import { NextResponse } from 'next/server'
import { projects } from '@/lib/store'
import { v4 as uuidv4 } from 'uuid'

export async function GET() {
  return NextResponse.json(projects)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const id = uuidv4()
    const project = {
      id,
      title: body.title || `Project ${id.slice(0, 6)}`,
      idea: body.idea || '',
      platformType: body.platformType || 'web',
      authentication: !!body.authentication,
      payments: !!body.payments,
      targetUsers: body.targetUsers || '',
      createdAt: new Date()
    }
    projects.push(project)
    return NextResponse.json(project, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
}
