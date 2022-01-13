import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import s from './App.module.css';
import AddProduct from 'components/AddProduct/AddProduct';
import Modal from 'components/Modal/Modal';
import DeleteProduct from 'components/DeleteProduct/DeleteProduct';

function App() {
  const [modalState, setModalState] = useState(false);
  const [modalDeleteState, setModalDeleteState] = useState(false);
  const [IdProd, setIdProd] = useState('');
  const [products, setProduct] = useState([
    {
      id: 1,
      name: 'Apple',
      count: 3,
      imageUrl:
        'https://media.istockphoto.com/photos/red-apple-picture-id153010865?k=20&m=153010865&s=612x612&w=0&h=Phcp8v4vwePUzd06jA5cAxuX9FtZC8RKOqTeo1hX0gc=',
      size: {
        width: 200,
        height: 200,
      },
      comments: ['Comment1', 'Comment2'],
    },
    {
      id: 2,
      name: 'Bannana',
      count: 2,
      imageUrl:
        'https://media.istockphoto.com/photos/banana-picture-id120492078?k=20&m=120492078&s=612x612&w=0&h=x37kUXEGg7BXcURecliAfeEErNxJgrmaq2Gc2FTFNUg=',
      size: {
        width: 200,
        height: 200,
      },
      comments: ['Comment3', 'Comment3'],
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
      imageUrl: data.image,
      size: {
        width: data.width,
        height: data.height,
      },
      comments: [data.comment],
    };
    setProduct([product, ...products]);
  };

  const deleteProduct = id => {
    setProduct(products.filter(product => product.id !== id));
  };

  const delProd = id => {
    setIdProd(id);
    setModalDeleteState(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button className={s.button}>Add product</button>
        <ul>
          {products.map(el => (
            <li key={el.id}>
              <img
                src={el.imageUrl}
                alt={el.name}
                className={s.image__product}
              />
              {el.name}
              <button type="button" onClick={() => delProd(el.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </form>
      {modalState && (
        <Modal title="Add product">
          <AddProduct setModalState={setModalState} modalSubmit={modalSubmit} />
        </Modal>
      )}
      {modalDeleteState && (
        <Modal title="Delete product">
          <DeleteProduct
            setModalDeleteState={setModalDeleteState}
            deleteProduct={deleteProduct}
            IdProd={IdProd}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
