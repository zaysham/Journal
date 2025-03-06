import { useState, useEffect, useRef } from "react";
import "./Journal.css";
import axios from "axios";

interface JournalProps {
  value: string;
}

export default function Journal({ value }: JournalProps) {
  const [jEntry, setJEntry] = useState("");
  const date = value;
  const [errorMessage, setErrorMessage] = useState("");
  const firstRender = useRef(true);

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
        setJEntry("No Entry found");
      });
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      getEntry();
    }
  }, [value]);

  const postEntry = function (e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/journal", { date, jEntry })
      .then(() => {
        console.log(`${date} journal entry successfully sent`);
      })
      .catch((error) => {
        setJEntry("A journal entry already exists.");
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

  return (
    <div className="journalContainer mx-auto">
      {errorMessage && <h1 className="text-danger">{errorMessage}</h1>}

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
          <button id="submitEntry" className="btn btn-success mt-1 mb-1">
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
