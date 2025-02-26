import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Journal from "./JournalComponent/Journal";
import "./Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      <div className="calendarContainer mt-5 mx-5 rounded">
        <Calendar
          className="calendarCSS"
          onChange={(value) => {
            onChange(value);
          }}
          value={value}
        />
      </div>

      <Journal value={value ? value.toDateString() : "No Date Selected"} />
    </>
  );
}
