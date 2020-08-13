import React from 'react';
import PropTypes from 'prop-types';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import clsx from 'clsx';



// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Homepage.module.scss';

const myads = [
  {
    id: 1,
    title: 'Antique lamp',
    location: 'Kraków',
    publishedDate: 'today',
    image: 'https://pl.pinterest.com/pin/22236591899036167/',
  },
  {
    id: 2,
    title: 'antique table',
    location: 'Kraków',
    publishedDate: 'today',
    image: 'https://pl.pinterest.com/pin/858639485188753944/',
  },
];
const Component = ({className}) => (
  <div className={clsx(className, styles.root)}>
    <h3>Today's offers</h3>
    <CardGroup>
      {myads.map(ad => (
        <Card className={styles.ad} key={ad.id}>
          <Card.Img className={styles.cardImage} variant="top" src={ad.image} />
          <Card.Body>
            <Card.Title><a href={`/post/edit/:${ad.id}`}>{ad.title}</a></Card.Title>
            <Card.Text>
              {ad.location}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Published {ad.publishedDate}</small>
          </Card.Footer>
        </Card>
      ))}
    </CardGroup>
    <Button href="/post/add" variant="dark">Add new post</Button>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
