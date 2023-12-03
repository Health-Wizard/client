import {
  fetchAnalytics,
  sumColumns,
} from "@modules/Dashboard/utils/DashboardUtils";
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
    backgroundColor: string;
    // borderColor: string;
    // borderWidth: number;
    // hoverBackgroundColor: string;
    // hoverBorderColor: string;
    data: number[];
  }[];
}
export default function SentimentBarChart() {
  const { isLoading, data } = useQuery(["analytics"], () => fetchAnalytics());

  const chartData: IChartData = {
    // labels: data ? [...data.data[3].label] : [],
    labels: data
      ? [...data.data[3].xrange]
      : [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
    datasets: [
      {
        label: "negative",
        data: data ? [...data.data[3].data[0]] : [],
        backgroundColor: "#FF0060",
      },
      {
        label: "neutral",
        data:
          data && data.data[3].data[1].length > 0
            ? [...data.data[3].data[1]]
            : [],
        backgroundColor: "#0079FF",
      },
      {
        label: "positive",
        data: data ? [...data.data[3].data[2]] : [],
        backgroundColor: "#00DFA2",
      },
    ],
  };

  return (
    <div className="h-full w-full">
      <Bar options={options} data={chartData} style={{ width: "100%" }} />
    </div>
  );
}
