import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {makeSelectProduct} from '../selectors';
import {addToCart} from '../../cart/actions';
import strictEqual from '../../helpers/strictEqual';

import {Col, Panel} from 'react-bootstrap';
import Image from '../../shared/image';
import Button from '../../shared/button';
import './index.css';

export class ProductTeaser extends Component {

  render() {
    const {
      name,
      description,
      imageUrl,
      price,
      onAddToCart
    } = this.props;

    return (
      <Col md={4} sm={4} xs={12}>
        <Panel style={{textAlign: 'center', marginTop: '20px'}}>
          <Panel.Heading>
            <Panel.Title>{name}</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <Image url={imageUrl} altText={name} />
          </Panel.Body>
          <Panel.Body>
            <p className='truncate'>
              {description}
            </p>
          </Panel.Body>
          <Panel.Footer>
            <Button flavor='primary' onClick={onAddToCart}>
              {price} ct
            </Button>
          </Panel.Footer>
        </Panel>
      </Col>
    );
  }
}

ProductTeaser.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired
};

const makeMapStateToProps = (_, {id}) => {
  const selectProduct = makeSelectProduct();

  return state => selectProduct(state, {id});
};

const mapDispatchToProps = (dispatch, {id}) => {
  return {
    onAddToCart: () => dispatch(addToCart(id))
  };
};

const connectOptions = {
  areStatePropsEqual: strictEqual
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
  null,
  connectOptions
)(ProductTeaser);
