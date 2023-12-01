import { Admin, Employee } from "src/interfaces/employee";

import { AxiosClient } from "./axiosInstance";

/**
 * Retrieves information for a single employee by making a GET request to the '/emp/getEmployee/:empId' endpoint.
 *
 * @param {number} empId - The ID of the employee to retrieve.
 * @throws {Error} If the request encounters an error.
 */
export const getSingleEmployee = async (empId: Number) => {
  try {
    const response = await AxiosClient.get(`/emp/getEmployee/${empId}`);
    console.log(response, "response");
  } catch (error) {
    console.log("Error: ", error);
  }
};

/**
 * Retrieves information for all employees by making a GET request to the '/emp/getEmployees' endpoint.
 *
 * @returns {Promise<Object>} A Promise that resolves to the response data containing information for all employees.
 * @throws {Error} If the request encounters an error.
 */
export const getAllEmployees = async () => {
  try {
    const response = await AxiosClient.get("/emp/getEmployees");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log('Error: ', error);
  }
};

/**
 * Retrieves all employees in a company by making a GET request to the '/emp/getEmployeesByCompany' endpoint.
 *
 * @returns {Promise<Array<Employee>>} A Promise that resolves to an array containing employee data for the specified company.
 * @throws {Error} If the request encounters an error.
 */
export const getAllEmployeesByCompanyName = async () => {
  try {
    const response = await AxiosClient.get('/emp/getEmployeesByCompany');
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

/**

 * Creates a new employee by making a POST request to the '/emp/createEmployee' endpoint.

 *
 * @param {Employee} employee - The employee object containing details for the new employee.
 * @returns {Promise<Object>} A Promise that resolves to the response data for the created employee.
 * @throws {Error} If the request encounters an error.
 */
export const createEmployee = async (employee: Employee) => {
  try {
    const response = await AxiosClient.post("/emp/createEmployee", {
      department: employee.department,

      designation: employee.designation,
      dateOfJoining: employee.dateOfJoining,
      salary: employee.salary,
      role: employee.role,
      gender: employee.gender,
      companyName: employee.companyName,

      age: employee.age,
    });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

/**
 * Creates a new admin by making a POST request to the '/emp/createAdmin' endpoint.
 *
 * @param {Admin} employee - The admin object containing details for the new employee.
 * @returns {Promise<Object>} A Promise that resolves to the response data for the created employee.
 * @throws {Error} If the request encounters an error.
 */
export const createAdmin = async (employee: Admin) => {
  try {
    const response = await AxiosClient.post("/emp/createAdmin", {
      designation: employee.designation,
      sector: employee.sector,
      sizeOfCompany: employee.sizeOfCompany,
      role: employee.role,
      gender: employee.gender,
      companyName: employee.companyName,
      companyUrl: employee.companyUrl,
    });
    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};

// export const updateEmployee = async (employee: Employee, empId: Number) => {
//     try {
//     const response = await AxiosClient.put(`/emp/updateEmployee/${empId}`, {
//       name: employee.name,
//       designation: employee.designation,
//       dateOfJoining: employee.dateOfJoining,
//       salary: employee.salary,
//       role: employee.role,
//       gender: employee.gender,
//     });
//     console.log('Response:', response.data);
//     return response.data;
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

/**
 * Deletes an employee by making a DELETE request to the '/emp/deleteEmployee/:empId' endpoint.
 *
 * @param {number} empId - The ID of the employee to delete.
 * @returns {Promise<Object>} A Promise that resolves to the response data for the deleted employee.
 * @throws {Error} If the request encounters an error.
 */
export const deleteEmployee = async (empId: Number) => {
  try {
    const response = await AxiosClient.delete(`/emp/deleteEmployee/${empId}`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

/**
 * Retrieves all unique company names by making a GET request to the '/emp/companyName' endpoint.
 *
 * @returns {Promise<Array<string>>} A Promise that resolves to an array containing unique company names.
 * @throws {Error} If the request encounters an error.
 */
export const getAllCompanyNames = async () => {
  try {
    const response = await AxiosClient.get("/emp/companyName");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
};

/**
 * Retrieves the role of the authenticated user by making a GET request to the '/emp/role/' endpoint.
 *
 * @returns {Promise<{ role: string }>} A Promise that resolves to an object containing the user's role.
 * @throws {Error} If the request encounters an error.
 */
export const getRole = async () => {
  try {
    const response = await AxiosClient.get('emp/role/');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log('Error: ', error);
  }
}
