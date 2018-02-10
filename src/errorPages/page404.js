import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import {Row, Jumbotron} from 'react-bootstrap';

function Page404({children}) {
  return (
    <React.Fragment>
      <Row>
        <Jumbotron>
          <h1>Hello there!</h1>
          <p>
            The page you are looking for does not exist.
          </p>
          <p>
            <Link to='/'>Go to dashboard</Link>
          </p>
        </Jumbotron>
      </Row>
      <Row>
        {children}
      </Row>
    </React.Fragment>
  );
}

Page404.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string
  ])
};

export default Page404;
