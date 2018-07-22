import React from 'react';

const Book = (props) => {  
  const {
    data,
    bookUpdate  
   } = props;

   
   const {   
    authors,
    imageLinks,
    title } = data; 
    const currentShelf = data.shelf ?  data.shelf : 'none';

  return (    
    <div className="book">
      <div className="book-top">
        { imageLinks ?        
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${imageLinks.thumbnail}") `}}></div>
        :
        <div>Sem Thumbail!</div>
        }        
          <div className="book-shelf-changer">
            <select 
              onChange={(event) => {
                console.log('mudando');
                bookUpdate(data,event.target.value, currentShelf)}                               
              }
              value={currentShelf}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
      <div className="book-title">{title}</div>
    <div className="book-authors">{authors}</div>
  </div>  
  );
};

export default Book;
