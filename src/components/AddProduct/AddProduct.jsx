import s from './AddProduct.module.css';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import React, { useState } from 'react';

const AddProduct = ({ setModalState, modalSubmit }) => {
  const [name, setName] = useState('');
  const [count, setCount] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (name.length < 1) {
      alert(`product name field is empty `);
      return;
    }
    setModalState(false);
    modalSubmit({ name, count, width, height });
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

      default:
        break;
    }
  };

  // return ReactDOM.createPortal(
  //   <div className={s.modal}>
  //     <div className={s.modal__Container}>
  //       <form className={s.form__Product} onSubmit={handleSubmit}>
  //         <input
  //           type="text"
  //           name="name"
  //           value={name}
  //           onChange={handleInputChange}
  //           placeholder="name product"
  //         />
  //         <input
  //           type="text"
  //           name="count"
  //           value={count}
  //           onChange={handleInputChange}
  //           placeholder="count product"
  //         />
  //         <div>
  //           <input
  //             type="text"
  //             name="width"
  //             value={width}
  //             onChange={handleInputChange}
  //             placeholder="width size product"
  //           />
  //           <input
  //             type="text"
  //             name="height"
  //             value={height}
  //             onChange={handleInputChange}
  //             placeholder="height size product"
  //           />
  //         </div>
  //         <div>
  //           <button>Add</button>
  //           <button type="button" onClick={() => setModalState(false)}>
  //             Close
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>,
  //   document.getElementById('portal'),
  // );
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
