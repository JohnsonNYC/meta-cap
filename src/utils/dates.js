export const formatDate = (inputDate) => {
  // Get today's date and clear the time part
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get tomorrow's date and clear the time part
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  // Clear the time part from the input date
  const input = new Date(inputDate);
  input.setHours(0, 0, 0, 0);

  // Check if the input date is today
  if (input.getTime() === today.getTime()) {
    return "today";
  }

  // Check if the input date is tomorrow
  if (input.getTime() === tomorrow.getTime()) {
    return "tomorrow";
  }

  // If not today or tomorrow, return the date in MMM/DD format
  const options = { month: "short", day: "2-digit" };
  return input.toLocaleDateString("en-US", options);
};

export const formatTime = (date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
};

export const getTodayDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
