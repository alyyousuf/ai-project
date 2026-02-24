import { Project } from '@/types/project'

export function generateProjectOutput(project: Project) {
  return {
    architecture: `
Platform Type: ${project.platformType}
Authentication: ${project.authentication ? "Enabled" : "Not Required"}
Payments: ${project.payments ? "Integrated" : "Not Included"}

Recommended Stack:
- Next.js
- PostgreSQL
- Prisma
- Vercel Hosting
`,

    database: `
Tables:
- users
- projects
- payments (if enabled)
- roles
`,

    prompts: `
ChatGPT Prompt:
Build a ${project.platformType} app with authentication=${project.authentication} and payments=${project.payments}

Claude Prompt:
Design scalable SaaS architecture.

Gemini Prompt:
Generate system design.

Replit Prompt:
Create full-stack app.
`,

    buildPlan: `
1. Setup Next.js
2. Create Auth
3. Setup DB
4. Create Dashboard
5. Deploy on Vercel
`
  }
}
