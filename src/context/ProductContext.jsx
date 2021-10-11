import React, {
  createContext, useContext, useEffect, useState,
} from 'react';
import { node } from 'prop-types';

import jsonProducts from '../components/Products/products.json';

export const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentOrderType, setCurrentOrderType] = useState({ name: '', isReverse: false });

  const orderProductsByName = () => {
    const ordered = products.sort((productA, productB) => {
      const nameA = productA.name.toUpperCase();
      const nameB = productB.name.toUpperCase();
      if (nameA < nameB) { return -1; }
      if (nameA > nameB) { return 1; }
      return 0;
    });
    if (currentOrderType.name === 'name' && currentOrderType.isReverse) {
      setProducts([...ordered.reverse()]);
      return setCurrentOrderType({ name: 'name', isReverse: false });
    }
    setProducts([...ordered]);
    return setCurrentOrderType({ name: 'name', isReverse: true });
  };

  const orderProductsByScore = () => {
    const ordered = products.sort((a, b) => a.score - b.score);

    if (currentOrderType.name === 'score' && currentOrderType.isReverse) {
      setCurrentOrderType({ name: 'score', isReverse: false });
      return setProducts([...ordered.reverse()]);
    }
    setCurrentOrderType({ name: 'score', isReverse: true });
    return setProducts([...ordered]);
  };

  const orderProductsByPrice = () => {
    const ordered = products.sort((a, b) => a.price - b.price);

    if (currentOrderType.name === 'price' && currentOrderType.isReverse) {
      setCurrentOrderType({ name: 'price', isReverse: false });
      return setProducts([...ordered.reverse()]);
    }
    setCurrentOrderType({ name: 'price', isReverse: true });
    return setProducts([...ordered]);
  };

  const getProductById = (id) => products.find((product) => product.id === parseInt(id, 10));

  const recommendedProducts = () => {
    let ordered = allProducts.sort((a, b) => b.score - a.score);
    const currentPageId = parseInt(window.location.pathname.split('/').at(-1), 10);
    ordered = ordered.filter((product) => product.id !== currentPageId);
    return ordered.slice(0, 3);
  };

  const filterProductsByPrice = ({ min, max }) => {
    if (parseInt(min, 10) === 0 && parseInt(max, 10) === 0) { return setProducts(allProducts); }
    const productsFiltered = allProducts.filter((product) => {
      if (product.price > min && product.price < max) {
        return product;
      }
      return false;
    });

    return setProducts(productsFiltered);
  };

  const filterProductsBySearch = (string) => {
    if (string === '' || string === undefined) {
      return setProducts(allProducts);
    }

    const productsFiltered = allProducts.filter((product) => {
      const productName = product.name.toUpperCase();
      const stringToSearch = string.toUpperCase();
      return productName.includes(stringToSearch);
    });

    return setProducts(productsFiltered);
  };

  const context = {
    products,
    allProducts,
    setProducts,
    orderProductsByName,
    orderProductsByScore,
    orderProductsByPrice,
    currentOrderType,
    getProductById,
    recommendedProducts,
    filterProductsByPrice,
    filterProductsBySearch,
  };

  useEffect(() => {
    setProducts(jsonProducts);
    setAllProducts(jsonProducts);
  }, []);

  return (
    <ProductsContext.Provider value={context}>
      { children }
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}

ProductsProvider.propTypes = {
  children: node,
}.isRequired;
