import streamApi from '../api/streamApi';
import {
  NEW_STREAM,
  GET_ALL_STREAMS,
  GET_STREAM_BY_ID,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types';

const newStreamReducer = (data) => {
  return {
    type: NEW_STREAM,
    payload: data,
  };
};

export const newStreamDB = (stream) => {
  return (dispatch) => {
    streamApi
      .post('/new', stream)
      .then((res) => {
        dispatch(newStreamReducer(res.data.data));
      })
      .catch((err) => console.log(err));
  };
};

const getAllStreamsAndPostReducer = (data) => {
  return {
    type: GET_ALL_STREAMS,
    payload: data,
  };
};

export const getAllStreamsdb = () => (dispatch) => {
  streamApi
    .get('/all')

    .then((res) => {
      dispatch(getAllStreamsAndPostReducer(res.data));
    })

    //sssss///

    .catch((err) => {
      let message =
        typeof err.response !== 'undefined'
          ? err.response.data.message
          : err.message;
      console.warn('error', message);
    });
};

const getStreamByIdReducer = (data) => {
  return {
    type: GET_STREAM_BY_ID,
    payload: data,
  };
};

export const getStreamById = (id) => (dispatch) => {
  streamApi
    .get(`/streams/${id}`)
    .then((res) => {
      dispatch(getStreamByIdReducer(res.data));
    })
    .catch((err) => console.log(err));
};

const deleteStreamReducer = (id) => {
  return {
    type: DELETE_STREAM,
    payload: id,
  };
};

export const deleteFromDB = (id) => (dispatch) => {
  streamApi.delete(`/delete/${id}`);
  dispatch(deleteStreamReducer(id));
};

const editStream = (stream) => {
  return {
    type: EDIT_STREAM,
    payload: stream,
  };
};

export const editStreamDB = (stream) => (dispatch) => {
  streamApi
    .patch(`/edit/${stream.id}`, stream)
    .then((res) => {
      dispatch(editStream(res.data.data));
    })
    .catch((err) => console.log(err));
};
