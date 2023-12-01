import BarChart from "./BarChart";
import Piechart from "./Piechart";

export default function CompanyReportcharts() {
  return (
    <div className="h-[70%] flex gap-3">
      <div className="w-[30%] h-full ">
        <Piechart />
      </div>
      <div className="w-[70%] h-full ">
        <BarChart />
      </div>
    </div>
  );
}
