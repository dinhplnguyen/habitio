import React, { useState } from "react";
import { UilAngleLeft, UilAngleRight, UilSunset } from '@iconscout/react-unicons'
import "./DatePicker.css";

export default function DatePicker() {

  const iconSize = 50;
  const [date, setDate] = useState(new Date());

  const handlePreviousDate = () => {
    const previousDate = new Date(date);
    previousDate.setDate(previousDate.getDate() - 1);
    setDate(previousDate);
  };

  const handleNextDate = () => {
    const nextDate = new Date(date);
    nextDate.setDate(nextDate.getDate() + 1);
    setDate(nextDate);
  };

  const handleTodayDate = () => {
    setDate(new Date());
  };

  // change date format to "mm dd, yyyy" which is "January 1, 2021"
  const formatDate = (date) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return date.toLocaleDateString(undefined, options);
  };


  return (
    <div className="datepicker__container">
      <a href="#last_day" onClick={handlePreviousDate} className="today__link">
        <UilAngleLeft size={iconSize} className="datepicker__icon" />
      </a>
      <span> {date.toDateString() === new Date().toDateString() ? "Today" : formatDate(date)} </span>
      {/* <a href="#today" onClick={handleTodayDate}>Today</a> */}
      <a href="#next_day" onClick={handleNextDate} className="today__link">
        <UilAngleRight size={iconSize} className="datepicker__icon" />
      </a>

      {date.toDateString() !== new Date().toDateString() && (
        <a href="#today_day" onClick={handleTodayDate} className="today__link">
          <UilSunset size={iconSize} className="datepicker__icon" />
        </a>
      )}
    </div>
  );
}