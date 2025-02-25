import "./Calendar.css";
import Calendar from "react-calendar";
import { useState } from "react";
import Journal from "./JournalComponent/Journal";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function CalendarComponent() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <>
      <div className="calendarContainer mt-5 mx-5 rounded">
        <Calendar
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
