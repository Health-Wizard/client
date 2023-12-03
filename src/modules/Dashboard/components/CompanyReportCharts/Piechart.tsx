import { useQuery } from "react-query";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { fetchAnalytics } from "@modules/Dashboard/utils/DashboardUtils";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  segmentShowStroke: false,
};

export default function Piechart() {
  const { isLoading, data } = useQuery(
    //@ts-ignore
    ["analytics"],
    () =>
      //@ts-ignore
      fetchAnalytics()
  );

  const chartData = {
    labels: data ? [...data.data[2].label] : [],
    datasets: [
      {
        data: data ? [...data.data[2].data] : [],
        backgroundColor: ["#C7B1F1", "#9968FE", "#B998F6"],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className="h-full bg-white rounded-xl p-3">
      <h2 className="text-sm font-semibold h-[5%] ">Happiness Index</h2>
      <div className="h-full w-full">
        <Pie options={options} data={chartData} />
      </div>
    </div>
  );
}
