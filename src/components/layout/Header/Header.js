import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {getUser} from '../../../redux/userRedux';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import clsx from 'clsx';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({ className, user }) => (
  <div className={clsx(className, styles.root)}>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Bulletin Board</Navbar.Brand>
     
      {user.authenticated ? (
      <Nav className="mr-auto">
        <Nav.Link href="/">My ads</Nav.Link>
        <Nav.Link href="/">Logout</Nav.Link>
      </Nav>
      ):
      (
        <Nav className="mr-auto">
        <Nav.Link href="https://google.com">Login with Google</Nav.Link>
        </Nav>
        )}
    </Navbar>
  </div >
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  user: getUser (state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

 const Container = connect(mapStateToProps)(Component);

export {
  Container as Header,
  // Container as Header,
  Component as HeaderComponent,
};