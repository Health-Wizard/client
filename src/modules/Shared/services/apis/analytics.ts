import { AxiosClient } from "./axiosInstance";

/**
 * Fetches health analytics data for employees.
 *
 * @returns {Promise<Object>} A Promise that resolves to the health analytics data.
 * @throws {Error} If the request encounters an error.
 */
export const analytics = async () => {
    try {
    const response = await AxiosClient.get("/emp/getHealthData/");
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("Error: ", error);
  }
}
