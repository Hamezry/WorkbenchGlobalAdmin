class Query {
  constructor(products) {
    this.products = products
  }

  certified_filter(certified) {
    if (certified.length > 0) {
      this.products = this.products.slice().filter((prod) => certified.includes(prod.certified))
    }
    return this;
  }

  unit_type_filter(unit_types) {
    if (unit_types.length > 0) {
      this.products = this.products.slice().filter(prod => unit_types.includes(prod.unit_type))
    }
    return this
  }

  code_filter(codes) {
    if (codes.length > 0) {
      this.products = this.products.slice().filter(prod => codes.includes(prod.code))
    }
    return this;
  }

  type_filter(types) {
    if (types.length > 0) {
      this.products = this.products.slice().filter(prod => types.includes(prod.type))
    }
    return this
  }
}

export default Query