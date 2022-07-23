//import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { newStreamDB } from '../actions/form-actions';
import { formValidation } from '../helper/formValidation';
import style from './stream.module.css';

export const StreamCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(false);

  const [formState, setFormState] = useState({
    title: '',
    description: '',
    codeToDelete: '',
  });

  const errorshandles = formValidation(formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.title.length > 3 && formState.description.length > 3) {
      dispatch(newStreamDB(formState));
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
        navigate('/');
      }, 1000);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
      console.log('error');
    }
  };

  return (
    <div style={{ marginTop: '3rem' }}>
      <h1>Create a New Steam</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Title
          </label>
          <input
            autoComplete="off"
            name="title"
            value={formState.title}
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Write a title"
            required
            onChange={(e) => {
              setFormState({ ...formState, title: e.target.value });
            }}
          />
          <span className="text-danger">{errorshandles.title}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Description
          </label>
          <input
            autoComplete="off"
            name="description"
            value={formState.description}
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Write a description"
            required
            onChange={(e) => {
              setFormState({
                ...formState,
                description: e.target.value,
              });
            }}
          />
          <span className="text-danger">{errorshandles.description}</span>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput3" className="form-label">
            Code to Delete
          </label>
          <input
            autoComplete="off"
            name="description"
            value={formState.codeToDelete}
            type="text"
            className="form-control"
            id="formGroupExampleInput3"
            placeholder="Write a code to delete your own streams"
            required
            onChange={(e) => {
              setFormState({
                ...formState,
                codeToDelete: e.target.value,
              });
            }}
          />
          <span className="text-danger">{errorshandles.codeToDelete}</span>
        </div>
        <button type="submit" className="btn btn-sm btn-primary">
          Submit
        </button>
      </form>
      {saved && (
        <div className={style.newStream}>
          <p>Stream saved</p>
        </div>
      )}
      {error && <div className={style.error}>complete the formulary</div>}
    </div>
  );
};
