import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAllStreamsdb } from '../actions/form-actions';
import useModal from '../Hooks/useModal';
import Modal from '../helper/Modal';
import style from './stream.module.css';
import ModalEdit from '../helper/ModalEdit';

export const StreamList = () => {
  const dispatch = useDispatch();
  const stateArray = useSelector((state) => state.form);
  //State to delete stream
  const [itemToDelete, setCodeToDelete] = useState({});
  const [show, handleClose, handleShow] = useModal();

  //State to edit stream
  const [itemToEdit, setEdit] = useState({});
  const [showEdit, handleCloseEdit, handleShowEdit] = useModal();

  useEffect(() => {
    dispatch(getAllStreamsdb());
  }, [show]);

  //Motion style
  const varant = {
    hidden: {
      opacity: 0,
    },
    visible: ({ delay }) => ({
      opacity: 1,

      transition: {
        delay,
        duration: 1,
        ease: 'easeInOut',
      },
    }),
  };
  //

  return (
    <div className={style.mainCointainer}>
      <h3>Stream List</h3>
      <div style={{ marginTop: '2rem', marginBottom: '2rem' }}>
        <Link className={style.addButton} to="streams/new">
          Add New Stream{' '}
        </Link>
      </div>

      <div className="ui celled list">
        {stateArray.map((item, index) => (
          <motion.div
            key={item._id}
            custom={{ delay: (index + 1) * 0.2 }}
            variants={varant}
            initial="hidden"
            animate="visible"
            className="item"
          >
            <div className={style.streamInfo}>
              <Link
                to={`/streams/${item._id}`}
                style={{ textDecoration: 'none' }}
                className="header"
              >
                <div className={style.streamLink}>
                  <div className={`icon ${style.icon}`}>
                    <i className="large middle aligned icon camera" />
                  </div>
                  <div className={style.content}>
                    <span style={{ fontWeight: 'bold !important' }}>
                      {item.title}
                    </span>
                    <h5>{item.description}</h5>
                  </div>
                </div>
              </Link>

              <div className={style.boxbotton}>
                <button
                  className={`${style.btn} ui button`}
                  onClick={() => {
                    setCodeToDelete(item);
                    handleShow();
                  }}
                >
                  Delete
                </button>
                <button
                  className={`${style.editButton} ui button primary`}
                  onClick={() => {
                    setEdit(item);
                    handleShowEdit();
                  }}
                >
                  Edit
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      {show && <Modal itemToDelete={itemToDelete} handleClose={handleClose} />}
      {showEdit && (
        <ModalEdit itemToEdit={itemToEdit} handleClose={handleCloseEdit} />
      )}
    </div>
  );
};
