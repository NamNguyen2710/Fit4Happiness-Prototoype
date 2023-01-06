import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Performance'
    }
  },
  scales: {
    x: {
      display: true,
      align: 'end',
      text: 'Weight'
    }
  }
};

const data = {
  labels: ['2/1', '4/1', '6/1',' 8/1', '9/1', '11/1','13/1'],
  datasets: [{
    label: 'Benchpress',
    data: [65, 68, 71, 73, 75, 76, 77],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.3
  }]
};

function UserAnalysis() {
  return (
    <div>
      <h3>User Analysis</h3>
      <Line options={options} data={data} />
    </div>
  );
}

export default UserAnalysis;