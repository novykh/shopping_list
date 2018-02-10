import React from 'react';
import PropTypes from 'prop-types';

import {Row, Jumbotron} from 'react-bootstrap';
import Button from '../shared/button';

function BlankSlate({message, mainAction, mainActionLabel, children}) {

  return (
    <React.Fragment>
      <Row>
        <Jumbotron>
          <h1>Hello there!</h1>
          <p>
            {message}
          </p>
          {mainAction &&
            <p>
              <Button flavor='primary' onClick={mainAction}>
                {mainActionLabel}
              </Button>
            </p>
          }
        </Jumbotron>
      </Row>
      <Row>
        {children}
      </Row>
    </React.Fragment>
  );
}

BlankSlate.propTypes = {
  message: PropTypes.string,
  mainAction: PropTypes.func,
  mainActionLabel: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.string
  ])
};

BlankSlate.defaultProps = {
  message: 'This page is empty'
};

export default BlankSlate;
