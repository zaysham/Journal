import { useState } from "react";
import "./Journal.css";

interface JournalProps {
  value: string;
}

interface JournalEntry {
  date: string;
  entry: string;
}

export default function Journal({ value }: JournalProps) {
  const arr = [];

  const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

  const [journalData, setJournalData] = useState("");

  const [currentData, setCurrentData] = useState({
    date: "",
    entry: "",
  });

  function handleClick(e) {
    e.preventDefault();
    const tempObj: JournalEntry = {
      date: value,
      entry: journalData,
    };

    const latest = [...journalEntries, tempObj];
    setJournalEntries(latest);

    arr.push(latest);
    console.log(arr[0]);
  }

  function findEntry(data: string) {
    const filteredEntry = journalEntries.filter((word) => word.date === data);

    setCurrentData({
      date: filteredEntry[0].date,
      entry: filteredEntry[0].entry,
    });
  }

  return (
    <div className="journalContainer mx-5">
      <h2 id="dateClicked" className="mt-3">
        {value}
      </h2>

      <form
        className="formContainer mx-auto"
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

      <button onClick={() => findEntry(value)} className="btn btn-warning">
        Get Journal Entry for {value}
      </button>

      {journalEntries && (
        <div className="journalEntryContainer">
          <h1>{currentData.date}</h1>
          <h1>{currentData.entry}</h1>
        </div>
      )}
    </div>
  );
}
