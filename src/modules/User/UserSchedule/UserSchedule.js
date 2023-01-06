import { useState } from "react";
import CalendarBar from "./CalendarBar";

const day = new Date().getDay(),
  diff = new Date().getDate() - day + (day === 0 ? -6 : 1);

function UserSchedule() {
  const [selectedIdx, setSelectedIdx] = useState(diff);
  return (
    <div>
      <h3>MY PERSONALIZED PLAN</h3>
      <CalendarBar selectedIdx={selectedIdx} setSelectedIdx={setSelectedIdx} />
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default UserSchedule;
