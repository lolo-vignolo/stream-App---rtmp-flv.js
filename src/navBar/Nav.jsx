import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div>
        <Link to="/">Stream List</Link>
        <Link to="streams/new">Create Stream</Link>
        <Link to="streams/edit">Edit Stream</Link>
        <Link to="streams/delete">Delete Stream</Link>
        <Link to="streams/show">Show Stream</Link>
      </div>
      <div>
        <button>🌚 mode 🌞</button>
      </div>
    </nav>
  );
};

export default Nav;
