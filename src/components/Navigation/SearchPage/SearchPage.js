import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../Book/Book';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';

export default class SearchPage extends Component {

  state = {
    searchText: '',
    searchBooks: []   
  }

  componentDidMount() {
    this.props.onSearch(true);        
  }

  compareShelfs = (results) => {    
    const { userBooks } = this.props;

    const newList = results.map(book => {
      const res = userBooks.find(item => item.title === book.title);
      if (res !== undefined && res !== null) {
        return { ...book, shelf: book.shelf };
      }
      else return { ...book, shelf: 'none' };       
    });
    console.log(newList);
    this.setState({ searchBooks: newList });
  }

  onSearchTextChange = async (event) => {    
    const { searchText } = this.state;
    const { bookAreas } = this.props;
    const { value } = event.target               
    this.setState({ searchText: value});                 
    if (value !== ' ' && value !== '') {              
      const match = new RegExp(escapeRegExp(value), 'i');
      const query = bookAreas.find(theme => match.test(theme));            
      const searchBooks = await this.props.queryBooks(query);                   
      if (searchBooks !== undefined) {             
        this.compareShelfs(searchBooks);        
      }
    } else {
      this.setState({ searchBooks: [] });
    }    
  }




  render() {
    const { bookUpdate } = this.props;
    const { searchText, searchBooks } = this.state;    

    // let showingBooks;
    
    
    console.log(this.state);
    return (             
      <div>
        <div className="search-books-bar">
        <Link
          className="close-search"
          to='/'
        >
        </Link>        
        <div className="search-books-input-wrapper">        
          <input 
            value={searchText} 
            type="text" 
            placeholder="Digite algum tema de livro!"
            onChange={event => this.onSearchTextChange(event)}            
          />
        </div>       
        </div> 
        <div className="search-books-results">
          <ol className="books-grid">                          
                {searchBooks.length > 0 ?
                  searchBooks.map(item => {
                    return (
                      <li key={item.id}>
                        <Book
                          data={item}
                          bookUpdate={bookUpdate}
                        />
                      </li>
                    )
                  })
                  :
                  <div>Digite algo para ser procurado!</div>
                }              
          </ol>
        </div>    
      </div>             
    );
  }
};
