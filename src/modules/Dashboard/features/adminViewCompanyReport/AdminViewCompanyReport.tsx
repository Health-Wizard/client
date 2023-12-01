import CompanyReportCards from "@modules/Dashboard/components/CompanyReportCards/CompanyReportCards";
import CompanyReportcharts from "@modules/Dashboard/components/CompanyReportCharts/CompanyReportcharts";
import React from "react";

export default function AdminViewCompanyReport() {
  return (
    <div className="h-full flex flex-col gap-2">
      <CompanyReportCards />
      <CompanyReportcharts />
    </div>
  );
}
