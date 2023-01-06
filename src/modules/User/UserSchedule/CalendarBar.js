import { useState } from 'react';

const month = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const weekDay = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

function getMonday(d) {
  const day = d.getDay(),
    diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
  return new Date(d.setDate(diff));
}

function CalendarBar(props) {
  const [monday, setMonday] = useState(getMonday(new Date()));

  return (
    <div>
      <button
        onClick={() => setMonday((val) => val.setDate(val.getDate() - 7))}
      ></button>
      <ul>
        {weekDay.map((val, idx) => {
          const day = new Date(monday);
          day.setDate(day.getDate() + idx);
          return (
            <li>
              <p className='subtitle-2'>
                {month[day.getMonth()]} {day.getDate()}
              </p>
              <h4>weekDay[idx]</h4>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() => setMonday((val) => val.setDate(val.getDate() + 7))}
      ></button>
    </div>
  );
}

export default CalendarBar;
