import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {selectCartProps} from './selectors';
import {removeAllFromCart} from './actions';
import strictEqual from '../helpers/strictEqual';

import {Panel, ListGroup} from 'react-bootstrap';
import BlankSlate from '../blankSlate';
import Button from '../shared/button';
import Item from './item';

export class ProductTeaser extends Component {

  render() {
    const {
      ids,
      totalPrice,
      onRemoveAll
    } = this.props;

    if (!ids.length) {
      return (
        <BlankSlate
          message='Your shopping list is empty'
        />
      );
    }

    return (
      <Panel>
        <Panel.Heading>
          <Panel.Title>Your shopping list</Panel.Title>
        </Panel.Heading>
        <ListGroup>
          {ids.map(id => <Item key={id} id={id} />)}
        </ListGroup>
        <Panel.Body>
          Total: <span style={{float: 'right'}}>{totalPrice} ct</span>
        </Panel.Body>
        <Panel.Footer>
          <Button flavor='primary' onClick={onRemoveAll}>
            remove all
          </Button>
        </Panel.Footer>
      </Panel>
    );
  }
}

ProductTeaser.propTypes = {
  ids: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  onRemoveAll: PropTypes.func.isRequired
};

const makeMapStateToProps = state => selectCartProps(state);

const mapDispatchToProps = dispatch => ({
  onRemoveAll: () => dispatch(removeAllFromCart())
});

const connectOptions = {
  areStatePropsEqual: strictEqual
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps,
  null,
  connectOptions
)(ProductTeaser);
