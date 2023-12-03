import { fetchAnalytics } from "@modules/Dashboard/utils/DashboardUtils";
import {
  Chart as ChartJS,
  registerables,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
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
  indexAxis: "x" as const,
  responsive: true,
  //@ts-ignore
  //   scales: {
  //     x: {
  //       stacked: true,
  //     },
  //     y: {
  //       stacked: true,
  //     },
  //   },
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
    backgroundColor: string[];
    // borderColor: string;
    // borderWidth: number;
    // hoverBackgroundColor: string;
    // hoverBorderColor: string;
    data: number[];
  }[];
}
export default function SentimentPieChart() {
  const { isLoading, data } = useQuery(["analytics"], () => fetchAnalytics());

  const chartData: IChartData = {
    // labels: data ? [...data.data[3].label] : [],
    labels: data ? [...data.data[2].label[0]] : [],
    datasets: [
      {
        label: "employ mood",
        data: data ? [...data.data[2].data[0]] : [],
        backgroundColor: [
          "#0079FF",
          "#00DFA2",
          "#F6FA70",
          "#FF0060",
          "#6499E9",
          "#9EDDFF",
          "#A6F6FF",
          "#BEFFF7",
          "#7743DB",
          "#C3ACD0",
          "#F7EFE5",
          "#FFB84C",
          "#2CD3E1",
          "#190482",
          "#DA0C81",
        ],
      },
    ],
  };

  console.log();

  return (
    <div className="h-full w-full">
      <Pie options={options} data={chartData} style={{ width: "50%" }} />
    </div>
  );
}
