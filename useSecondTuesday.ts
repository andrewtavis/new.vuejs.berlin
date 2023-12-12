export default function secondTuesday(month?: number) {
  // today, right after midnight
  const today = new Date()
  today.setHours(0)
  today.setMinutes(0)
  today.setSeconds(0)
  today.setMilliseconds(0)

  const year = today.getFullYear()
  if (month === undefined) month = today.getMonth()
  // ignoring this would create the first day of month minus the offset,
  // resulting in for example 31st of October 23:00 in GMT+1
  const tzOffset = today.getTimezoneOffset() / -60
  const firstDateOfMonth = new Date(year, month, 1, tzOffset)
  const firstDay = firstDateOfMonth.getDay()

  let firstTuesdayOffset
  
  if (firstDay === 2) {
    // first day of the month is tuesday
    firstTuesdayOffset = 0
  } else if (firstDay < 2) {
    // month starts sunday or monday
    firstTuesdayOffset = 3 - firstDay
  } else {
    // first tuesday is not part of the first week
    firstTuesdayOffset = 10 - firstDay
  }

  const result = new Date(year, month, firstTuesdayOffset + 7, tzOffset)

  // today is after the second tuesday
  if (today > result) {
    return secondTuesday(month + 1)
  }

  return result
}
