export const getFormattedDate = (date) =>
  date
    ? new Date(date).toLocaleDateString("es-ar", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";
