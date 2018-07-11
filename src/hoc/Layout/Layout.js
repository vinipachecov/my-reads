import React from 'react';
import PropTypes from 'prop-types';

const layout = (props) => {
  return (
    <div className="app">
      {props.children}
    </div>
  )
};

layout.propTypes = {

};

export default layout;
