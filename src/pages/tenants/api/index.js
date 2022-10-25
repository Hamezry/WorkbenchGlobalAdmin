import axios from '../../../utils/axios';

/**
 * TenantsAPICalls is a Class that encapsulates all the API requests for Tenants
 *
 * If an API request hasn't been implemented yet, crosscheck that it isn't a dublicate, then extend the class here.
 *
 * This provides a single source of truth for all the API requests that have been implemented on the Backend
 */
class TenantsAPICalls {
  /**
   * @param {number} id
   * The ID of the tenant
   */
  get_tenant_input_position(id) {
    return axios.get(`input/position/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the tenant
   */
  get_service_list_info(id) {
    return axios.get(`tenant/info/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the tenant
   */
  get_client_graph(id) {
    return axios.get(`client/graph/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the tenant
   */
  get_client_transaction(id) {
    return axios.get(`transaction/summary/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the tenant
   */
  get_stock_position(id) {
    return axios.get(`stock/position/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the Warehouse
   */
  get_warehouse_list(id) {
    return axios.get(`tenant/warehouses/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the Location
   */
  get_location_list(id) {
    return axios.get(`tenant/location/list/${id}`);
  }
  /**
   * @param {number} id
   * The ID of the Item
   */
  get_tenant_item_list(id) {
    return axios.get(`tenant/items/${id}`);
  }

  /**
   * @param {number} tenantId
   * The ID of the tenant
   * @param {number} warehouseId
   * The ID of the warehouse
   */
  handle_warehouse_filter(tenantId, warehouseId) {
    return axios.get(
      `transaction/summary/${tenantId}?warehouse=${warehouseId}`
    );
  }
  /**
   * @param {number} tenantId
   * The ID of the tenant
   * @param {number} locationId
   * The ID of the location
   */
  handle_location_filter(tenantId, locationId) {
    return axios.get(`transaction/summary/${tenantId}?location=${locationId}`);
  }
  /**
   * @param {number} tenantId
   * The ID of the tenant
   * @param {number} itemId
   * The ID of the item
   */
  handle_item_filter(tenantId, itemId) {
    return axios.get(`transaction/summary/${tenantId}?item=${itemId}`);
  }
  /**
   * @param {string[]} arr
   * An Array of Tenant IDs
   */
  bulk_activate_tenants(arr) {}

  /**
   * @param {string[]} arr
   * An Array of Tenant IDs
   */
  bulk_deactivate_tenants(arr) {}
}

// Export as a Singleton
export const TenantsAPIs = new TenantsAPICalls();
