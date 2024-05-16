import { ref } from 'vue'
import { data as events } from './events.data'

function happensBefore(date: Date, eventDate: Date) {
  const t1 = eventDate.getTime()
  const t2 = date.getTime()

  return t1 < t2
}

function happensAfter(date: Date, eventDate: Date) {
  const t1 = eventDate.getTime()
  const t2 = date.getTime()

  return t1 > t2
}

export default function useEvents() {
  type Event = typeof events[number]

  let nextEvent: Event | undefined = undefined
  const pastEvents: Event[] = []
  const futureEvents: Event[] = []

  const today = new Date()

  for (let event of events) {
    const eventDate = new Date(event.frontmatter.date)
    if (happensAfter(today, eventDate)) futureEvents.push(event)
    else if (happensBefore(today, eventDate)) pastEvents.push(event)
  }

  pastEvents.sort((a,b) => a.frontmatter.date.localeCompare(b.frontmatter.date))
  futureEvents.sort((a,b) => a.frontmatter.date.localeCompare(b.frontmatter.date) * -1)

  nextEvent = futureEvents[0]

  return { nextEvent, pastEvents, futureEvents }
}
