import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
//import Nav from '../navBar/Nav';
import {
  StreamDelete,
  StreamEdit,
  StreamList,
  StreamShow,
  StreamCreate,
} from '../pages';

export const Router = () => {
  return (
    <div className="ui container">
      <div>
        <Header />
      </div>
      <Routes>
        <Route exact path="/" element={<StreamList />} />
        <Route exact path="/streams/new" element={<StreamCreate />} />
        <Route exact path="/streams/edit/:id" element={<StreamEdit />} />
        <Route exact path="/streams/delete" element={<StreamDelete />} />
        <Route exact path="/streams/:id" element={<StreamShow />} />
        <Route exact path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};
