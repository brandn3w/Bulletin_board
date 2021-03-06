import React from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getUser } from '../../../redux/userRedux';
import { getAll, loadPostsRequest } from '../../../redux/postsRedux.js';
import {displayTime} from '../../../utils/displayTime';


import styles from './Homepage.module.scss';

class Component extends React.Component {


  static propTypes = {

    className: PropTypes.string,
    posts: PropTypes.array,
    user: PropTypes.object,
    loadPosts: PropTypes.func,
  }

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const { posts, user, className } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        {user.authenticated ? (
          <Button href="/post/add" className="m-3" variant="dark">Add new post</Button>
        ) : ''}
        <Row>
          {posts.map(ad => (
            <Col xs={12} md={6} lg={4} key={ad.id}>
              <Card {...ad} className={styles.ad}>
                <Card.Img className={styles.cardImage} variant="top" src={ad.image} />
                <Card.Body>
                  <Card.Title><a href={`/post/${ad.id}`}>{ad.title}</a></Card.Title>
                  <Card.Text>
                    {ad.location}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Published {displayTime(ad.published)}</small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: getUser(state),
  posts: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  loadPosts: () => dispatch(loadPostsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Container as Homepage,
  Component as HomepageComponent,

};
