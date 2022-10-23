import axios from '../../../utils/axios';

/**
 * CountriesAPICalls is a Class that encapsulates all the API requests for Countries
 *
 * If an API request hasn't been implemented yet, crosscheck that it isn't a dublicate, then extend the class here.
 *
 * This provides a single source of truth for all the API requests that have been implemented on the Backend
 */
class CountriesAPICalls {
  /**
   * @param {number} id
   * The ID of the Country
   */
  get_stock_position(id) {
    return axios.get(`country/stock/position/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the Country
   */
  get_input_positon(id) {
    return axios.get(`country/input/position/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the Country
   */
  get_admin_levels(id) {
    return axios.get(`admin/levels/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the Country
   * @param {'state' | 'local_government' | 'admin'} level
   * The Level to be uploaded
   * @param {File} file
   * The XLSX file to be uploaded
   */
  upload_admin_levels(id, level, file) {
    return;
  }
}

// Export as s SingleTon
export const CountriesAPIs = new CountriesAPICalls();
