import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import s from './App.module.css';
import AddProduct from 'components/AddProduct/AddProduct';
import Modal from 'components/Modal/Modal';

function App() {
  const [modalState, setModalState] = useState(false);
  const [products, setProduct] = useState([
    {
      id: 1,
      name: 'Apple',
      count: 3,
      size: {
        width: 200,
        height: 200,
      },
      comments: ['CommentModel', 'CommentModel'],
    },
    {
      id: 2,
      name: 'Pear',
      count: 2,
      size: {
        width: 200,
        height: 200,
      },
      comments: ['CommentModel', 'CommentModel'],
    },
  ]);

  useEffect(() => {
    const productsStorage = JSON.parse(localStorage.getItem('products'));
    if (productsStorage) {
      setProduct(productsStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const handleSubmit = e => {
    e.preventDefault();
    toggleModal();
  };

  const toggleModal = () => {
    setModalState(!modalState);
  };

  const modalSubmit = data => {
    if (products.some(product => product.name === data.name)) {
      alert(`${data.name} is already in product.`);
      return;
    }
    if (data.name.length < 1) {
      alert(`error empty text`);
      return;
    }
    const product = {
      id: nanoid(10),
      name: data.name,
      count: data.count,
      size: {
        width: data.width,
        height: data.height,
      },
      comments: ['CommentModel', 'CommentModel'],
    };
    setProduct([product, ...products]);
  };

  const deleteProduct = id => {
    setProduct(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className={s.button}>Add product</button>
        <ul>
          {products.map(el => (
            <li key={el.id}>
              {el.name}{' '}
              <button type="button" onClick={() => deleteProduct(el.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </form>
      {/* {modalState && (
        <AddProduct setModalState={setModalState} modalSubmit={modalSubmit} />
      )} */}
      {modalState && (
        <Modal title="Add product">
          <AddProduct setModalState={setModalState} modalSubmit={modalSubmit} />
        </Modal>
      )}
    </div>
  );
}

export default App;
