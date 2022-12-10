import { useState } from "react";

import MenuIcon from "resource/bars-solid.svg";
import CalendarIcon from "resource/calendar-regular.svg";
import PenNoteIcon from "resource/file-pen-solid.svg";
import ChartIcon from "resource/chart-line-solid.svg";
import HandshakeIcon from "resource/handshake-angle-solid.svg";

function UserPage() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div>
      <header>
        <button>
          <img src={MenuIcon} alt="menuIcon" />
        </button>
      </header>
      <sidebar className={openSidebar && "open"}>
        <div>
          <img src={CalendarIcon} alt="scheduleIcon" />
          <h4>Schedule</h4>
        </div>
        <div>
          <img src={PenNoteIcon} alt="trackingIcon" />
          <h4>Tracking</h4>
        </div>
        <div>
          <img src={ChartIcon} alt="analysisIcon" />
          <h4>Analysis</h4>
        </div>
        <div>
          <img src={HandshakeIcon} alt="suggestionIcon" />
          <h4>Suggestion</h4>
        </div>
      </sidebar>
    </div>
  );
}

export default UserPage;
