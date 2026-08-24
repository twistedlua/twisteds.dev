import { mkdir, readFile, writeFile } from 'node:fs/promises'

const routes = ['work', 'about', 'contact']
const distDirectory = new URL('../dist/', import.meta.url)
const indexHtml = await readFile(new URL('index.html', distDirectory), 'utf8')

for (const route of routes) {
  const routeDirectory = new URL(`${route}/`, distDirectory)

  await mkdir(routeDirectory, { recursive: true })
  await writeFile(new URL('index.html', routeDirectory), indexHtml)
}
