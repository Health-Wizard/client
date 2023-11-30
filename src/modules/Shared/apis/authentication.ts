import { AxiosClient } from './axiosInstance';

/**
 * Registers a new employee by sending a POST request to the '/emp/register' endpoint.
 *
 * @param {string} name - The name of the employee.
 * @param {string} username - The username of the employee.
 * @param {string} companyEmail - The company email of the employee.
 * @param {string} password - The password for the employee's account.
 * @returns {Promise<Object>} A Promise that resolves to the response data if the request is successful.
 * @throws {Error} If the request encounters an error.
 */
export const registerEmployee = async (name: string, username: string, companyEmail: string, password: string) => {
  try {
    const response = await AxiosClient.post('/emp/register', {
      name: name,
      username: username,
      companyEmail: companyEmail,
      password: password,
    });
    console.log('Response:', response.data);
    return response.data
  } catch (error) {
    console.error('Error:', error);
  }
};

/**
 * Logs in an employee by sending a POST request to the '/emp/login' endpoint.
 *
 * @param {string} companyEmail - The company email associated with the employee's account.
 * @param {string} password - The password for the employee's account.
 * @returns {Promise<Object>} A Promise that resolves to the response data if the login is successful.
 * @throws {Error} If the login request encounters an error.
 */
export const loginEmployee = async (companyEmail: string, password: string) => {
    try {
    const response = await AxiosClient.post('/emp/login', {
      companyEmail: companyEmail,
      password: password,
    });
    console.log('Response:', response.data);
    return response.data
  } catch (error) {
    console.error('Error:', error);
  }
}

