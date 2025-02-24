import "./Calendar.css";

export default function Calendar() {
  const januaryBtns = [
    ["1", "2", "3", "4", "5", "6", "7"],
    ["8", "9", "10", "11", "12", "13", "14"],
    ["15", "16", "17", "18", "19", "20", "21"],
    ["22", "23", "24", "25", "26", "27", "28"],
    ["29", "30", "31"],
  ];

  return (
    <div className="calendarContainer mt-5 mx-5">
      <h1 className="mb-5">Calendar</h1>

      {januaryBtns[0].map((btn) => (
        <button className="btn btn-primary janBtns">{btn}</button>
      ))}

      {januaryBtns[1].map((btn) => (
        <button className="btn btn-primary janBtns">{btn}</button>
      ))}

      {januaryBtns[2].map((btn) => (
        <button className="btn btn-primary janBtns">{btn}</button>
      ))}

      {januaryBtns[3].map((btn) => (
        <button className="btn btn-primary janBtns">{btn}</button>
      ))}

      {januaryBtns[4].map((btn) => (
        <button className="btn btn-primary janBtns">{btn}</button>
      ))}
    </div>
  );
}
