import { useState } from "react";
import "./Journal.css";

interface JournalProps {
  value: string;
}

export default function Journal({ value }: JournalProps) {
  const [journalEntries, setJournalEntries]: { date: string; entry: string } =
    useState([{}]);

  const [journalData, setJournalData] = useState("");

  function handleClick(e) {
    e.preventDefault();
    const tempObj: { date: string; entry: string } = {
      date: value,
      entry: journalData,
    };

    setJournalEntries([journalEntries, tempObj]);
  }

  return (
    <div className="journalContainer mx-5">
      <h2 id="dateClicked" className="mt-3 rounded p-1">
        {value}
      </h2>
      <form
        action=""
        onSubmit={(e) => {
          handleClick(e);
        }}
      >
        <textarea
          className="mt-2 rounded"
          name=""
          id="journalText"
          rows={13}
          // cols={106}
          placeholder="Type your entry here"
          onChange={(e) => setJournalData(e.target.value)}
        />

        <div className="text-center">
          <button id="submitEntry" className="btn btn-success mt-1">
            Submit Entry for {value}
          </button>
        </div>
      </form>

      <button className="btn btn-warning">Get Journal Entry for {value}</button>

      <div className="journalEntryContainer">
        <h1>{journalEntries[0].date}</h1>
        <h1>{journalEntries[0].entry}</h1>
      </div>
    </div>
  );
}
