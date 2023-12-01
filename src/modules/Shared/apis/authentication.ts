import { Login, Register } from 'src/interfaces/employee';
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
export const registerEmployee = async (employee: Register) => {
  try {
    const response = await AxiosClient.post('/emp/register', {
      name: employee.name,
      username: employee.username,
      companyEmail: employee.companyEmail,
      password: employee.password,
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
export const loginEmployee = async (employee: Login) => {
    try {
    const response = await AxiosClient.post('/emp/login', {
      companyEmail: employee.companyEmail,
      password: employee.password,
    });
    const token = response.data.token;
    localStorage.setItem('authToken', token);

    console.log('Response:', response.data);
    return response.data
  } catch (error) {
    console.error('Error:', error);
  }
}

/**
 * Logs out the user by removing the authentication token from local storage.
 *
 * @throws {Error} If an error occurs during the logout process.
 */
export const logout = () => {
  try {
    localStorage.removeItem('authToken');
    
    console.log('Logout successful');
  } catch (error) {
    console.error('Error during logout:', error);
  }
}
