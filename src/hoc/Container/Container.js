import React from 'react';

const container = (props) => {  
  const { search } = props;
  return (
    <div className={ search ? 'list-books' : 'search-books'}>
      {props.children}      
    </div>
  )
};

export default container;
