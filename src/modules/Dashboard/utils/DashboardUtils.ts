import { analytics } from "@modules/Shared/services/apis/analytics";
import { getSingleEmployee } from "@modules/Shared/services/apis/employee";

export const fetchEmployee = async (empId: number) => {
  const data = await getSingleEmployee(empId);
  return data;
};

export const fetchAnalytics = async () => {
  const data = await analytics();
  // console.log(data);
  return data;
};
