import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from '../BookShelf/BookShelf';
import PropTypes from 'prop-types';
import Footer from '../Footer/Footer';


const shelfs = ['currentlyReading', 'wantToRead', 'read'];

const UserBooks = (props) => {  
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
        >            
        Add a Book
        </Link>
      </div>   
      <Footer />             
    </div>    
  )
};

  UserBooks.propTypes = {
    bookList: PropTypes.array.isRequired,
    bookUpdate: PropTypes.func.isRequired
}

export default UserBooks;
