import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export const Spinner = () => (
  //arrow func only with return can be omit
  <Fragment>
    <img
      src={spinner}
      alt='loading...'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  </Fragment>
);

export default Spinner;
