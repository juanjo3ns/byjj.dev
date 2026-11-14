# byjj.dev

Portfolio hub linking to all my live projects. Next.js (App Router) + Tailwind CSS, deployed on Vercel at [byjj.dev](https://byjj.dev).

## Develop

```bash
npm install
npm run dev
```

## Add a project

Edit `src/data/projects.ts`. Projects hosted on Vercel get a subdomain: add `<name>.byjj.dev` to the project's domains in Vercel (DNS for byjj.dev is managed by Vercel, so no extra records are needed).
