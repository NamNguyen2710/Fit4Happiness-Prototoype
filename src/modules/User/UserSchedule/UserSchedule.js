import Slidedown from "../../components/Slidedown/Slidedown";
import WeeklySchedule from "./WeeklySchedule";

function UserSchedule() {
  return (
    <div>
      <h3>User Schedule</h3>
      <WeeklySchedule />

      <Slidedown header="Workout day A">
        <h5>Main lifts:</h5>
        <ul>
          <li>Squats 5 x 5</li>
          <li>Bench press 5 x 5</li>
          <li>Row 5 x 5</li>
        </ul>
        <h5>Supplemental lifts:</h5>
        <ul>
          <li>Weighted planks 40s x 2</li>
          <li>Lunges 10 x 3</li>
        </ul>
      </Slidedown>
      <Slidedown header="Workout day B">
        <h5>Main lifts:</h5>
        <ul>
          <li>Deadlift 5 x 5</li>
          <li>Overhead press 5 x 5</li>
          <li>Row 5 x 5</li>
        </ul>
        <h5>Supplemental lifts:</h5>
        <ul>
          <li>Weighted planks 40s x 2</li>
          <li>Lunges 10 x 3</li>
        </ul>
      </Slidedown>
    </div>
  );
}

export default UserSchedule;