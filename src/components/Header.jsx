import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { backgroundMode } from '../actions/layout-actions';

const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="ui secundary pointing menu">
      <div className="leftS menu">
        <Link to="/" className="item">
          Streamy
        </Link>
      </div>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
      <button
        onClick={() => dispatch(backgroundMode())}
        className="ui blue button right floated "
      >
        <i className="icon sun outline" />
        |
        <i style={{ marginLeft: '0.5rem' }} className="icon moon outline" />
      </button>
    </div>
  );
};

export default Header;
