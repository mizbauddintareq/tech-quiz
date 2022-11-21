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
        <h3 className="text-center font-semibold text-3xl text-cyan-600 my-5">
          Quiz Data Visualization
        </h3>
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

          <Bar dataKey="total" stackId="a" fill="#0D98BA" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistic;
