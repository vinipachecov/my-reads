import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf/BookShelf';


const shelfs = ['currentlyReading', 'wantToRead', 'read'];

const BookLists = (props) => {  
  const { bookList } = props;    
  let currentlyReadingList, WantToReadList, ReadList;

  if (bookList > 0 || bookList !== undefined) {
    // filter bookList based on section
    shelfs.forEach(shelf => {    
      switch(shelf) {
        case 'currentlyReading':
          currentlyReadingList = bookList.filter(book => book.shelf === shelf);        
          break
        case 'wantToRead':
          WantToReadList = bookList.filter(book => book.shelf === shelf);
          break
        case 'read':
          ReadList = bookList.filter(book => book.shelf === shelf);
          break
        default: 
          console.log('error');
      }   
    });
  }
  
  return (
    <div>
      <div className="list-books-content">
        <BookShelf bookUpdate={props.bookUpdate} bookList={currentlyReadingList} title={'Currently Reading'} />
        <BookShelf bookUpdate={props.bookUpdate} bookList={WantToReadList} title={'Want to Read'} />
        <BookShelf bookUpdate={props.bookUpdate} bookList={ReadList} title={'Read'} />      
      </div>
        <div className="open-search">
        <Link
          to='/search'                       
          onClick={() => this.setState({ showSearchPage: true })}
        >            
        Add a Book
        </Link>
      </div>                
    </div>    
  )
};

export default BookLists;
