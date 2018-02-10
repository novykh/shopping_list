import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {makeSelectItem} from '../selectors';
import {addToCart, removeFromCart} from '../actions';
import strictEqual from '../../helpers/strictEqual';

import Button from '../../shared/button';
import {ListGroupItem} from 'react-bootstrap';

export class CartItem extends Component {

  render() {
    const {
      amount,
      name,
      price,
      totalPrice,
      onDecrease,
      onIncrease,
      onRemove
    } = this.props;

    return (
      <ListGroupItem>
        <p>
          {name}
          <span style={{float: 'right'}}>
            total: {totalPrice} ct
          </span>
        </p>
        <div>
          ({amount} x {price} ct)
          <span style={{float: 'right'}}>
            <Button onClick={onDecrease} flavor='warning'>-</Button>
            <Button onClick={onIncrease} flavor='success'>+</Button>
            <Button onClick={() => onRemove(amount)} flavor='danger'>X</Button>
          </span>
        </div>
      </ListGroupItem>
    );
  }
}

CartItem.propTypes = {
  amount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onIncrease: PropTypes.func.isRequired,
  onDecrease: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

const makeMapStateToProps = (_, {id}) => {
  const selectItem = makeSelectItem();

  return state => selectItem(state, {id});
};

const mapDispatchToProps = (dispatch, {id}) => {
  return {
    onIncrease: () => dispatch(addToCart(id)),
    onDecrease: () => dispatch(removeFromCart(id)),
    onRemove: amount => dispatch(removeFromCart(id, amount))
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
)(CartItem);
