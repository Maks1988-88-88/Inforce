import s from './AddProduct.module.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const AddProduct = ({ setModalState, modalSubmit }) => {
  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [comment, setComment] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name.length < 1) {
      alert(`product name field is empty `);
      return;
    }
    setModalState(false);
    modalSubmit({ name, count, width, height, comment, image });
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'count':
        setCount(value);
        break;

      case 'width':
        setWidth(value);
        break;

      case 'height':
        setHeight(value);
        break;

      case 'comment':
        setComment(value);
        break;

      case 'image':
        setImage(value);
        break;

      default:
        break;
    }
  };
  return (
    <form className={s.form__Product} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="name product"
      />
      <input
        type="text"
        name="count"
        value={count}
        onChange={handleInputChange}
        placeholder="count product"
      />
      <div>
        <input
          type="text"
          name="width"
          value={width}
          onChange={handleInputChange}
          placeholder="width size product"
        />
        <input
          type="text"
          name="height"
          value={height}
          onChange={handleInputChange}
          placeholder="height size product"
        />
      </div>
      <input
        type="text"
        name="comment"
        value={comment}
        onChange={handleInputChange}
        placeholder="comment"
      />
      <input
        type="text"
        name="image"
        value={image}
        onChange={handleInputChange}
        placeholder="imageUrl"
      />
      <div>
        <button>Add</button>
        <button type="button" onClick={() => setModalState(false)}>
          Close
        </button>
      </div>
    </form>
  );
};

export default AddProduct;

AddProduct.propTypes = {
  setModalState: PropTypes.func.isRequired,
  modalSubmit: PropTypes.func.isRequired,
};
