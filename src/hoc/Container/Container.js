import React from 'react';
import PropTypes from 'prop-types';

const container = (props) => {  
  const { search } = props;
  return (
    <div className={ search ? 'list-books' : 'search-books'}>
      {props.children}      
    </div>
  )
};

container.propTypes = {

};

export default container;
