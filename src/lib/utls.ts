export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function formattedDateMonth(dateString: string) {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
  }).format(new Date(dateString))
}

export function formattedDate(dateString: string) {
  return new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(dateString))
}
