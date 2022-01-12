// import s from './DeleteProduct.module.css';
import PropTypes from 'prop-types';

const DeleteProduct = ({ setModalDeleteState, deleteProduct, IdProd }) => {
  const deleteCurrentProduct = id => {
    deleteProduct(id);
    setModalDeleteState(false);
  };
  return (
    <div>
      <button onClick={() => deleteCurrentProduct(IdProd)}>Yes</button>
      <button type="button" onClick={() => setModalDeleteState(false)}>
        No
      </button>
    </div>
  );
};

export default DeleteProduct;

DeleteProduct.propTypes = {
  setModalDeleteState: PropTypes.func.isRequired,
  deleteProduct: PropTypes.func.isRequired,
  IdProd: PropTypes.number.isRequired,
};
