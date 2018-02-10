import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List as immutableList} from 'immutable';
import {connect} from 'react-redux';
import {getProducts, deleteError} from './actions';
import {
  selectIsFetching,
  selectIds,
  selectProductsError
} from './selectors';
import debounce from '../helpers/simpleDebounce';
import dataLoader from '../hoc/dataLoader';

import {Row, Col} from 'react-bootstrap';
import ProductTeaser from '../product/teaser';
import BlankSlate from '../blankSlate';
import Cart from '../cart';

export class Products extends Component {

  constructor(props) {
    super(props);

    this.getData = debounce(this.props.getData, 300);
  }

  render() {
    const {
      ids,
      isDataLoaded
    } = this.props;

    if (isDataLoaded && ids.isEmpty()) {
      return (
        <BlankSlate
          message='There are no products to show.'
          mainAction={this.getData}
          mainActionLabel='Fetch some'
        />
      );
    }

    return (
      <Row style={{marginTop: '20px'}}>
        <Col md={8} xs={12}>
          <Row>
            {ids.map(id => <ProductTeaser key={id} id={id} />)}
          </Row>
        </Col>
        <Col md={4} xs={12}>
          <Cart />
        </Col>
      </Row>
    );
  }
}

Products.propTypes = {
  ids: PropTypes.instanceOf(immutableList).isRequired,
  isDataLoaded: PropTypes.bool,
  error: PropTypes.string,
  getData: PropTypes.func,
  hideAlert: PropTypes.func
};

Products.defaultProps = {
  isDataLoaded: true,
  error: '',
  getData: noop => noop,
  hideAlert: noop => noop
};

const mapStateToProps = state => {
  return {
    isDataLoaded: !selectIsFetching(state),
    ids: selectIds(state),
    error: selectProductsError(state)
  };
};

const mapDispatchToProps = {
  getData: getProducts,
  hideAlert: deleteError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(dataLoader(Products));
