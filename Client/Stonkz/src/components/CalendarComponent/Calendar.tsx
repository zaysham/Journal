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
    <div className="calendarContainer mt-5 mx-5 rounded">
      <h1 className="mb-3">Calendar</h1>

      <h3 className="mb-4">January 2025</h3>

      <div>
        {januaryBtns[0].map((btn) => (
          <button className="btn btn-primary janBtns">{btn}</button>
        ))}
      </div>

      <div>
        {januaryBtns[1].map((btn) => (
          <button className="btn btn-primary janBtns">{btn}</button>
        ))}
      </div>

      <div>
        {januaryBtns[2].map((btn) => (
          <button className="btn btn-primary janBtns">{btn}</button>
        ))}
      </div>

      <div>
        {januaryBtns[3].map((btn) => (
          <button className="btn btn-primary janBtns">{btn}</button>
        ))}
      </div>

      <div>
        {januaryBtns[4].map((btn) => (
          <button className="btn btn-primary janBtns">{btn}</button>
        ))}
      </div>
    </div>
  );
}
