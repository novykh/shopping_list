import React from 'react';
import PropTypes from 'prop-types';
import {Image as Img} from 'react-bootstrap';

function Image({url, altText, height}) {
  return (
    <Img src={url} alt={altText} circle style={{height}} />
  );
}

Image.propTypes = {
  url: PropTypes.string,
  height: PropTypes.string,
  altText: PropTypes.string
};

Image.defaultProps = {
  url: '/',
  height: '150px',
  altText: ''
};

export default Image;
