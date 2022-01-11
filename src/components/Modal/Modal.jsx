import s from './Modal.module.css';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Modal = ({ setModalState, modalSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setModalState(false);
    modalSubmit(name);
  };

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <form className={s.modal} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <button>Add</button>
        <button type="button" onClick={() => setModalState(false)}>
          Close
        </button>
      </form>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  setModalState: PropTypes.func.isRequired,
  modalSubmit: PropTypes.func.isRequired,
};
