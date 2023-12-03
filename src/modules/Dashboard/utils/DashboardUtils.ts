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

export const sumColumns = (arrayOfArrays) => {
  // Check if the input is valid
  if (
    !Array.isArray(arrayOfArrays) ||
    arrayOfArrays.length === 0 ||
    !Array.isArray(arrayOfArrays[0])
  ) {
    throw new Error(
      "Invalid input. Please provide a non-empty array of arrays."
    );
  }

  // Get the number of rows and columns
  const rows = arrayOfArrays.length;
  const columns = arrayOfArrays[0].length;

  // Initialize an array to store column sums
  const columnSums = new Array(columns).fill(0);

  // Iterate through each column and row to calculate column sums
  for (let col = 0; col < columns; col++) {
    for (let row = 0; row < rows; row++) {
      // Add the current element to the column sum
      columnSums[col] += arrayOfArrays[row][col];
    }
  }

  return columnSums;
};
