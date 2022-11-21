import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistic = () => {
  const data = useLoaderData().data;

  return (
    <div className="flex justify-center mt-8">
      <div>
        <BarChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="total" stackId="a" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistic;
