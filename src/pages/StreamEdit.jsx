import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './stream.module.css';
import { editStreamDB } from '../actions/form-actions';

//STATE
// _id(pin):"62d5bdef72fb6f7348b565e3"
// title(pin):"LOLO per"
// description(pin):"GABRIEL"
// codeToDelete(pin):"A"
// __v(pin):0

export const StreamEdit = () => {
  const state = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const paramId = useParams();
  const navigate = useNavigate();

  const streamToEdit = state.find((stream) => stream._id === paramId.id);

  const { title, description, _id } = streamToEdit;
  console.log(title, description, _id);

  const [formState, setFormState] = useState({
    id: _id,
    title,
    description,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    dispatch(editStreamDB(formState));
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      delay={0.5}
      transition={{ duration: 1 }}
    >
      <h1>Edit Stream</h1>
      <form onSubmit={handleSubmit} className={style.editForm}>
        <div className="form-group" style={{ marginBottom: '2rem' }}>
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter title"
            name="title"
            value={formState.title}
            onChange={(e) => {
              setFormState({ ...formState, title: e.target.value });
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Description</label>
          <textarea
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter description"
            name="description"
            value={formState.description}
            onChange={(e) => {
              setFormState({ ...formState, description: e.target.value });
            }}
          />
        </div>
        <button type="submit" className={`btn btn-primary ${style.btnEdit}`}>
          Submit
        </button>
      </form>
    </motion.div>
  );
};
