import axios from '../../../utils/axios';

/**
 * ProductsAPICalls is a Class that encapsulates all the API requests for Products
 *
 * If an API request hasn't been implemented yet, crosscheck that it isn't a dublicate, then extend the class here.
 *
 * This provides a single source of truth for all the API requests that have been implemented on the Backend
 */
class ProductsAPICalls {
  /**
   * @param {{
   *  name: string,
   *  code: string,
   *  product_type: string,
   *  unit_type: string,
   *  certified: boolean
   *  }} form
   */
  create_product(form) {
    return axios.post('create-product', form);
  }
  /**
   * @param {number} pk
   * The ID of the product to be updated.
   * @param {{
   *  name: string,
   *  code: string,
   *  product_type: string,
   *  unit_type: string,
   *  certified: boolean
   *  }} form
   */
  update_product(pk, form) {
    return axios.post(`product/update/${pk}`, form);
  }

  /**
   * @param {number} pk
   * The ID of the product to be updated.
   */
  deactivate_product(pk) {
    return axios.get(`product/change/status/${pk}`);
  }
}

// Export as a Singleton
export const ProductsAPIs = new ProductsAPICalls();
