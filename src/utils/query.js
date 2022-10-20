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

  sort_ascending() {}

  sort_descending() {}
}

export default Query;
