import { ref } from 'vue'
import useSecondTuesday from './useSecondTuesday'
import { data as events } from './events.data'

function isSameDay(eventDate: Date, date: Date) {
  const sameYear = eventDate.getFullYear() === date.getFullYear()
  const sameMonth = eventDate.getMonth() === date.getMonth()
  const sameDay = eventDate.getDate() === date.getDate()
  return sameYear && sameMonth && sameDay
}

function isPastDate(eventDate: Date, date: Date) {
  const t1 = eventDate.getTime()
  const t2 = date.getTime()

  return t1 < t2
}

export default function useEvents() {
  type Event = typeof events[number]

  const nextEvent = ref<Event | undefined>()
  const pastEvents = ref<Event[]>([])
  const futureEvents = ref<Event[]>([])

  const today = new Date()
  const secondTuesday = useSecondTuesday()
  console.log('(next) second tuesday is', secondTuesday)

  for (let event of events) {
    const eventDate = new Date(event.frontmatter.date)
    if (isSameDay(eventDate, secondTuesday)) nextEvent.value = event
    else if (isPastDate(eventDate, today)) pastEvents.value.push(event)
    else futureEvents.value.push(event)
  }

  return { nextEvent, pastEvents, futureEvents }
}
