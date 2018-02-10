import React from 'react';

import {Link} from 'react-router-dom';
import {PageHeader} from 'react-bootstrap';

function Header() {
  return (
    <PageHeader>
      <Link to='/'>Froot&Vegiis</Link> <small>your product service</small>
    </PageHeader>
  );
}

export default Header;
