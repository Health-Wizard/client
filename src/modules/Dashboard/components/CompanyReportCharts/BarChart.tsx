import { fetchAnalytics } from "@modules/Dashboard/utils/DashboardUtils";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
import { useQuery } from "react-query";

ChartJS.register(...registerables);

interface IChartOpts {
  indexAxis: "x" | "y";
  responsive: boolean;
  plugins: {
    legend: {
      display: boolean;
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}

const options: IChartOpts = {
  indexAxis: "y" as const,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "",
    },
  },
};

interface IChartData {
  labels: string[];
  datasets: {
    label: string;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    // hoverBackgroundColor: string;
    // hoverBorderColor: string;
    data: number[];
  }[];
}

export default function BarChart() {
  const { isLoading, data } = useQuery(
    //@ts-ignore
    ["analytics"],
    () =>
      //@ts-ignore
      fetchAnalytics()
  );
  console.log(data && console.log(data.data[3].xrange));
  const chartData: IChartData = {
    labels: data ? [...data.data[3].xrange[0]] : [],
    datasets: [
      {
        label: "Dataset",
        backgroundColor: "#5856d6",
        borderColor: "#5856d6",
        borderWidth: 1,
        // hoverBackgroundColor: "rgba(255, 99, 132, 0.4)",
        // hoverBorderColor: "rgb(255, 99, 132)",
        data: data ? [...data.data[3].data[0]] : [],
      },
    ],
  };

  return (
    <div className="h-full bg-white rounded-xl p-3">
      <h2 className="text-sm font-semibold h-[5%] ">Stress Index</h2>
      <div className="h-[95%] w-full ">
        <Bar options={options} data={chartData} style={{ width: "100%" }} />
      </div>
    </div>
  );
}
