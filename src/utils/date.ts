export function formatDate(date: Date, locale = "es-AR") {
  return date.toLocaleDateString(locale, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

export function toISO(date: Date) {
  return date.toISOString().split("T")[0];
}
