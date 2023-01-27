import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import ReactSelect from 'react-select';
import { pizzaAPI } from '../../api/api';
import { addProduct } from '../../redux/actions.main';
import styles from './Header.module.scss';

const Header = () => {
  const [restaraunts, setRestaraunts] = useState([]);
  const [restaraunt, setRestaraunt] = useState('');
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState('');

  const dispatch = useDispatch();

  const getRestaraunts = async () => {
    const response = await pizzaAPI.getAllRestaurants();
    if (response?.data?.length) {
      setRestaraunts(
        response.data.map((item) => ({ value: item.id, label: item.name }))
      );
    }
  };

  const getProducts = async (item) => {
    setRestaraunt(item.label);
    const response = await pizzaAPI.getPizzasById(item.value);
    if (response?.data?.length) {
      setProducts(
        response.data.map((item) => ({
          value: item.id,
          label: item.name,
          price: item.price,
        }))
      );
    }
  };

  const addToTable = () => {
    if (product.label && typeof product.price === 'number' && restaraunt) {
      dispatch(addProduct(product.label, product.price, restaraunt));
    }
  };

  useEffect(() => {
    getRestaraunts();
  }, []);

  return (
    <div className={styles.container}>
      <h5>Create new entry</h5>
      <ReactSelect
        className={styles.select}
        placeholder="Select restaraunt"
        options={restaraunts}
        onChange={(item) => getProducts(item)}
      />
      <ReactSelect
        className={styles.select}
        placeholder="Select pizza"
        isDisabled={!products?.length}
        options={products}
        onChange={(item) => setProduct(item)}
      />
      <Button className={styles.button} onClick={addToTable}>
        Add to table
      </Button>
    </div>
  );
};
export default Header;
