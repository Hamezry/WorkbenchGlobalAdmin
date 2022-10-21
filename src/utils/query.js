/**
 * Query is a filter builder that exposes methods for filtering
 * It is extensible and can be curried to accomodate methods for specific filtering
 *
 * Extending example:
 * class ModalQuery extends Query. ModalQuery will have all the methods defined within
 * You can define new methods for your new Modal Query
 *
 * const NewModalQuery = new ModalQuery(data).filter_methods_you_want_default()
 *
 * Usage
 * const dummydata = [
 *    {id: '1', name: 'prod1', created: '19 Oct, 2020', price: 20.99 , stock: 2, },
 *    {id: '2', name: 'prod2', created: '19 Oct, 2020', price: 20.99 , stock: 2, },
 *    {id: '3', name: 'prod3', created: '20 Oct, 2020', price: 20.99 , stock: 2, },
 *    {id: '4', name: 'prod4', created: '20 Oct, 2020', price: 20.99 , stock: 2, },
 * ]
 *
 * const [filterObj, setFilterObj] = useState({
 *    stock: [],
 *    price: [],
 * })
 *
 * const [products_to_display, setProducts] = useState([])
 *
 * const QueryBuilder = new  Query(dummydata)
 *                             .stock_filter(filterObj.stock)
 *                             .price_filter(filterObj.price)
 *
 * useEffect(() => {
 *  const populate = () => {
 *    setProducts(QueryBuilder.data)
 *   }
 *
 *  populate()
 * }, [])
 */
class Query {
  constructor(products) {
    this.data = products;
  }

  certified_filter(certified) {
    if (certified.length > 0) {
      this.data = this.data
        .slice()
        .filter((prod) => certified.includes(prod.certified));
    }
    return this;
  }

  unit_type_filter(unit_types) {
    if (unit_types.length > 0) {
      this.data = this.data
        .slice()
        .filter((prod) => unit_types.includes(prod.unit_type));
    }
    return this;
  }

  code_filter(codes) {
    if (codes.length > 0) {
      this.data = this.data.slice().filter((prod) => codes.includes(prod.code));
    }
    return this;
  }

  type_filter(types) {
    if (types.length > 0) {
      this.data = this.data
        .slice()
        .filter((prod) => types.includes(prod.product_type));
    }
    return this;
  }

  sort_ascending() {
    this.data = this.data
      .slice()
      .sort(
        (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
      );
  }

  sort_descending() {
    this.data = this.data
      .slice()
      .sort(
        (a, b) => new Date(b.created).getTime() - new Date(a.created).getTime()
      );
  }
}

export default Query;
