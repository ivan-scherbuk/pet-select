import React from 'react';
import { Table } from 'react-bootstrap';
import styles from './Table.module.scss';

const TableComponent = ({ productsData, handleRemove, handleEdit }) => {
  return (
    <div className={styles.container}>
      <h4>Calculation</h4>
      <Table striped bordered hover size="sm" className={styles.table}>
        <thead>
          <tr>
            <th>Restaraunt</th>
            <th>Product</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {productsData?.products?.map((product) => (
            <tr key={product.id} className={styles.currency}>
              <td>{product.restaraunt}</td>
              <td>{product.product}</td>
              <td>
                <input
                  className={styles.input}
                  type="number"
                  defaultValue={product.cost}
                  onChange={(e) => handleEdit(product.id, e.target.value)}
                ></input>
              </td>
              <td
                className={styles.removeButton}
                onClick={() => handleRemove(product.id, product.cost)}
              >
                Remove
              </td>
            </tr>
          ))}
          <tr>
            <td className={styles.summary} colspan="2">Summary:</td>
            <td>{productsData?.summary}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableComponent;
