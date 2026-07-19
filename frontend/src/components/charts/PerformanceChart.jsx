import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "09:00", cpu: 22, ram: 41 },
  { time: "10:00", cpu: 34, ram: 48 },
  { time: "11:00", cpu: 41, ram: 56 },
  { time: "12:00", cpu: 37, ram: 61 },
  { time: "13:00", cpu: 52, ram: 63 },
  { time: "14:00", cpu: 47, ram: 59 },
];

function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#1d3b1d" />

        <XAxis
          dataKey="time"
          stroke="#B8D8B8"
        />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="cpu"
          stroke="#06a719"
          strokeWidth={3}
        />

        <Line
          type="monotone"
          dataKey="ram"
          stroke="#6cf068"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default PerformanceChart;