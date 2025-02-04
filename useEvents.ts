import { ref } from 'vue'
import { data as events } from './events.data'

function happensBefore(date: Date, eventDate: Date) {
  const t1 = eventDate.getTime()
  const t2 = date.getTime()

  return t1 < t2
}

export default function useEvents() {
  type Event = typeof events[number]
  events.sort((a, b) => {
    return a.frontmatter.date.localeCompare(b.frontmatter.date)
  })

  let nextEvent: Event | undefined = undefined
  const pastEvents: Event[] = []
  const futureEvents: Event[] = []

  const today = new Date()

  for (let event of events) {
    const eventDate = new Date(event.frontmatter.date)
    if (happensBefore(today, eventDate)) {
      pastEvents.push(event)
    } else {
      if (futureEvents.length === 0) nextEvent = event
      futureEvents.push(event)
    }
  }

  return { nextEvent, pastEvents, futureEvents }
}
