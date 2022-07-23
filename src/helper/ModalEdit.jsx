import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './modal.css';

const ModalEdit = ({ itemToEdit, handleClose }) => {
  const [user, setuser] = useState('');
  const [edit, setEdit] = useState('');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    if (user === itemToEdit.codeToDelete) {
      setEdit('ok');
      navigate(`/streams/edit/${itemToEdit._id}`);
    } else {
      setuser('');
      setEdit('wrong');
      setTimeout(() => {
        setEdit('');
      }, 1000);
    }
  };

  return (
    <article className="modal is-open" onClick={() => handleClose()}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={() => handleClose()}>
          X
        </button>

        <label htmlFor="inputUser" className="inputUser">
          To edit this stream, add user name used to create this:
          <script style={{ fontWeight: 'bold' }}> Stream</script>
        </label>
        <input
          className="input"
          type="text"
          id="inputUser"
          value={user}
          onChange={(e) => setuser(e.target.value)}
        />
        {edit === 'wrong' && (
          <p className="noDeleted">write the right code and press edit!</p>
        )}

        <button className="btn-primary btn" onClick={handleClick}>
          Edit
        </button>
      </div>
    </article>
  );
};

export default ModalEdit;
