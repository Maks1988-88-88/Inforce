import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import s from './Modal.module.css';

function Modal({ title, children }) {
  return ReactDOM.createPortal(
    <div className={s.modal}>
      <div className={s.modal__Container}>
        <h2 className={s.modal__title}>{title}</h2>
        {children}
      </div>
    </div>,
    document.getElementById('portal'),
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
