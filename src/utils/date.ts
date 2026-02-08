export function formatDate(date: Date, locale = "es-AR") {
  return date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export function toISO(date: Date) {
  // Use local date, not UTC
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
