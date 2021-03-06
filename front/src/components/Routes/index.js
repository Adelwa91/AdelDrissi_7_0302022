// Import the necessary dependencies //
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Sign from '../../pages/Sign';
import Home from '../../pages/Home';
import User from '../../pages/User';
import Post from '../../pages/Post';
import Navbar from '../Navbar';
// Starting point of the index component //
function index() {
  // Virtual DOM //
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Sign />} />
        <Route path="/home" exact element={<Home />} />
        <Route path="/user/:id" exact element={<User />} />
        <Route path="/post/:id" exact element={<Post />} />
      </Routes>
    </Router>
  );
}
// Export index component //
export default index;
