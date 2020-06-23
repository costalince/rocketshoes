import React, { Component } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { Button } from '../../components/Button';
import { ProductList } from './styles';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      products: [],
    };
  }

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <Button type="button">
              <div>
                <MdAddShoppingCart sise={16} color="#FFF" /> 3
              </div>

              <span>ADICIONAR AO CARRINHO</span>
            </Button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default Home;
