export const dateToLocale = (date: number) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleString("ru-RU", {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  });
};
