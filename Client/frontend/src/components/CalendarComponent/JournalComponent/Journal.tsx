import { useState } from "react";
import "./Journal.css";
import axios from "axios";

interface JournalProps {
  value: string;
}

export default function Journal({ value }: JournalProps) {
  const [jEntry, setJEntry] = useState("");
  const date = value;

  const getEntry = function () {
    axios
      .get(`http://localhost:3000/journal/${date}`)
      .then((res) => {
        const dataReceived = res.data[0].entry;

        console.log(dataReceived);

        if (dataReceived.length > 0) {
          setJEntry(dataReceived);
        } else {
          setJEntry("");
        }
      })
      .catch((error) => {
        console.log(error);
        setJEntry("");
      });
  };

  const postEntry = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/journal", { date, jEntry })
      .then(() => {
        console.log(`${date} journal entry successfully sent`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteEntry = function () {
    axios
      .delete(`http://localhost:3000/journal/${date}`)
      .then(() => {
        console.log(`${date} journal entry is successfully deleted`);
        setJEntry("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const patchEntry = function () {
    axios
      .patch(`http://localhost:3000/journal/${date}`, { entry: jEntry })
      .then(() => {
        console.log("UPDATED");
        setJEntry(`ENTRY UPDATED TO:  ${jEntry}`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const arr = [];

  // const [journalEntries, setJournalEntries] = useState<JournalEntry[]>([]);

  // const [journalData, setJournalData] = useState("");

  // const [currentData, setCurrentData] = useState({
  //   date: "",
  //   entry: "",
  // });

  // function handleClick(e) {
  //   e.preventDefault();
  //   const tempObj: JournalEntry = {
  //     date: value,
  //     entry: journalData,
  //   };

  //   const latest = [...journalEntries, tempObj];
  //   setJournalEntries(latest);

  //   arr.push(latest);
  //   console.log(arr[0]);
  // }

  // function findEntry(data: string) {
  //   const filteredEntry = journalEntries.filter((word) => word.date === data);

  //   setCurrentData({
  //     date: filteredEntry[0].date,
  //     entry: filteredEntry[0].entry,
  //   });
  // }

  return (
    <div className="journalContainer mx-auto">
      <button onClick={getEntry} className="btn btn-success mt-2">
        Get Journal Entry
      </button>

      <button className="btn btn-danger mt-2 mx-3" onClick={deleteEntry}>
        Delete Journal Entry
      </button>

      <h2 id="dateClicked" className="mt-3">
        {value}
      </h2>

      <form
        className="formContainer"
        action=""
        // onSubmit={(e) => {
        //   handleClick(e);
        // }}
        onSubmit={(e) => {
          postEntry(e);
        }}
      >
        <textarea
          className="mt-2 rounded"
          name=""
          id="journalText"
          rows={13}
          // cols={106}
          placeholder="Please enter your journal entry here"
          onChange={(e) => setJEntry(e.target.value)}
          value={jEntry}
        />

        <div className="">
          <button
            onClick={postEntry}
            id="submitEntry"
            className="btn btn-success mt-1 mb-1"
          >
            Submit Journal Entry
          </button>
        </div>
      </form>

      <button className="btn btn-warning mt-2 mb-3" onClick={patchEntry}>
        Update Journal Entry
      </button>
    </div>
  );
}
