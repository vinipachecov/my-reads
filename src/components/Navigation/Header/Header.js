import React from 'react';
import PropTypes from 'prop-types';

const header = (props) => {
  const { search } = props;
  return (
    search ?   
    <div>
      { props.children }           
    </div>        
      :
      <div>
        <div className="list-books-title">
        <h1>MyReads</h1>      
        </div>        
        { props.children }  
      </div>      
  );
};

header.propTypes = {
  search: PropTypes.bool
};

export default header;
