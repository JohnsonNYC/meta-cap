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

export const convertTimeFormat = (timeArray, format = "12") => {
  if (!timeArray) return "";

  return timeArray.map((time) => {
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    minutes = parseInt(minutes, 10);

    if (format === "12") {
      const period = hours >= 12 ? "PM" : "AM";
      hours = hours % 12 || 12; // Convert 0 to 12 for 12 AM
      return `${hours}:${minutes.toString().padStart(2, "0")} ${period}`;
    } else {
      // Return in 24-hour format
      return `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;
    }
  });
};

export const getSelectedDate = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
