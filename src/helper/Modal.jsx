import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromDB } from '../actions/form-actions';
import './modal.css';

const Modal = ({ itemToDelete, handleClose }) => {
  const dispatch = useDispatch();
  const [user, setuser] = useState('');
  const [deleted, setDeleted] = useState('');

  const handleDelete = () => {
    if (user === itemToDelete.codeToDelete) {
      dispatch(deleteFromDB(itemToDelete._id));
      setuser('');
      setDeleted('ok');
      setTimeout(() => {
        handleClose();
      }, 3000);
    } else {
      setuser('');
      setDeleted('error');
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  return (
    <article className="modal is-open" onClick={() => handleClose()}>
      <div className="modal-container" onClick={(e) => e.st()}>
        <label htmlFor="inputUser" className="inputUser">
          Add user name used to create this:
          <script style={{ fontWeight: 'bold' }}> Stream</script>
        </label>
        <input
          className="input"
          type="text"
          id="inputUser"
          value={user}
          onChange={(e) => setuser(e.target.value)}
        />
        {deleted === 'ok' && <p className="deleted">Stream deleted</p>}
        {deleted === 'error' && (
          <p className="noDeleted">Code wrong. Stream not deleted, try again</p>
        )}

        <button className="modal-close" onClick={() => handleClose()}>
          <i className="close icon btn-icon"></i>
        </button>
        <button
          className="btn-danger btn"
          type="submit"
          onClick={() => handleDelete()}
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default Modal;
