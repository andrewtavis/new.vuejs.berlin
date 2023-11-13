import { readdir, readFile, writeFile } from 'node:fs/promises'

const existingFiles = await readdir('./events')
const eventsList = JSON.parse(await readFile('./events-archive.json'))

// https://gist.github.com/codeguy/6684588?permalink_comment_id=3361909#gistcomment-3361909
const slugify = text =>
  text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')

function eventToMarkdown (event, slug) {
  const { id, title, eventUrl: meetupUrl, description, venue, dateTime } = event.node

  return `---
title: ${title}
date: ${dateTime}
slug: ${slug}
---

${description}
`
}

eventsList.forEach(async (event) => {
  const { dateTime, title } = event.node
  const date = dateTime.split('T')[0]
  const slug = slugify(`${date}-${title}`)

  const fileName = `${slug}.md`
  if (existingFiles.includes(fileName)) return

  const content = eventToMarkdown(event, slug)
  await writeFile(`./events/${fileName}`, content)
  console.log('wrote', fileName)
})
