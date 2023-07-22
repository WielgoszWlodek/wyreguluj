import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function ChartZniesmaczony({ title, data, dataKey, grid }) {

  return (
    <div className="chart">
  
      <h3 className="chartTitle">{title}</h3>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data.reverse()}>
          <XAxis dataKey="bodzce[0]" stroke="#5550bd" />
          <YAxis dataKey="ratingZniesmaczony" stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#767676" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}