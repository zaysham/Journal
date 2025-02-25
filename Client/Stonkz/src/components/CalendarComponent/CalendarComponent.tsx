import "./Calendar.css";
import Calendar from "react-calendar";
import { useState } from "react";

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

      <div className="journalContainer mx-5">
        <h2 id="dateClicked" className="mt-3">
          {value?.toDateString()}
        </h2>
        <form action="">
          <textarea
            className="mt-2 rounded"
            name=""
            id=""
            rows={13}
            cols={106}
            placeholder="Type your entry here"
          />

          <button className="btn btn-success mt-1">
            Submit Entry for {value?.toDateString()}
          </button>
        </form>
      </div>
    </>
  );
}
