export const DateForMatter = (originDate) => {
  const parsedDate = new Date(originDate);
  const formattedDate = parsedDate.toLocaleDateString("en-US",{
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).replace(/\//g,".");
  return formattedDate;
}