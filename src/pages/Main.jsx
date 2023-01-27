import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header/Header";
import TableComponent from "../components/Table/Table";
import { editProductPrice, removeProduct } from "../redux/actions.main";
import styles from "./Main.module.scss";

const Main = () => {
  const dispatch = useDispatch();
  const { productsData } = useSelector((state) => state.main);

  const handleRemove = (id, price) => {
    dispatch(removeProduct(id, price));
  };

  const handleEdit = (id, price) => {
    dispatch(editProductPrice(id, price));
  };

  return (
    <div className={styles.container}>
      <Header />
      <TableComponent
        productsData={productsData}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </div>
  );
};
export default Main;
