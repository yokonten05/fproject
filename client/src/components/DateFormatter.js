import React from "react";

function DateFormatter({ date }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return <span>{formattedDate}</span>;
}

export default DateFormatter;
