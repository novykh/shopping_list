import React, {Component} from 'react';
import PropTypes from 'prop-types';
import getDisplayName from '../../helpers/getDisplayName';

import Loader from '../../shared/loader';

function dataLoader(WrappedComponent, {hideWhileLoading = false} = {}) {

  class Wrapper extends Component {

    componentDidMount() {
      this.getDataIfNeeded();
    }

    getDataIfNeeded() {
      const {
        isDataLoaded,
        getData
      } = this.props;

      if (typeof getData !== 'function') {
        return;
      }

      if (!isDataLoaded) {
        getData();
      }
    }

    render() {
      const {isDataLoaded = true} = this.props;
      const shouldHideWrappedComponent = hideWhileLoading && !isDataLoaded;

      return (
        <React.Fragment>
          {!shouldHideWrappedComponent &&
            <WrappedComponent {...this.props} />
          }

          {!isDataLoaded &&
            <Loader />
          }
        </React.Fragment>
      );
    }
  }

  Wrapper.displayName = `LoaderHOC(${getDisplayName(WrappedComponent)})`;

  Wrapper.propTypes = {
    isDataLoaded: PropTypes.bool,
    getData: PropTypes.func
  };

  return Wrapper;
}

export default dataLoader;
