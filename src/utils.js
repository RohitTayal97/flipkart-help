const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export function getDateString(timeStamp) {
  const date = new Date(timeStamp);
  const daysDiff = Math.round((Date.now() - date.getTime()) / 86400000);
  if (daysDiff > 7) {
    return date.toLocaleDateString();
  }
  if (daysDiff === 0) {
    return "Today";
  }
  if (daysDiff === 1) {
    return "Yesterday";
  }
  return DAYS[date.getDay()];
}

export function getTimeString(timeStamp) {
  return new Date(timeStamp).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export function clone(data) {
  return JSON.parse(JSON.stringify(data));
}
