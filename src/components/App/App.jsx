import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { nanoid } from 'nanoid';
import s from './App.module.css';
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
    if (products.some(product => product.name === data)) {
      alert(`${data} is already in product.`);
      return;
    }
    if (data.length < 1) {
      alert(`error entered empty text`);
      return;
    }
    const product = {
      id: nanoid(10),
      name: data,
      count: 3,
      size: {
        width: 200,
        height: 200,
      },
      comments: ['CommentModel', 'CommentModel'],
    };
    setProduct([product, ...products]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className={s.button}>Add product</button>
        <ul>
          {products.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
      </form>
      {modalState &&
        ReactDOM.createPortal(
          <Modal setModalState={setModalState} modalSubmit={modalSubmit} />,
          document.getElementById('portal'),
        )}
    </div>
  );
}

export default App;
