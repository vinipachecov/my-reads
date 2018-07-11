import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Header from './components/Navigation/Header/Header';
import SearchPage from './components/Navigation/SearchPage/SearchPage';
import Container from './hoc/Container/Container';
import { get, getAll } from './BooksAPI';
import BookLists from './components/BookLists/BookLists';

class BooksApp extends React.Component {
  state = {   
    showSearchPage: false,
    allBooks: []
  }

  getBooks = async () => {
    const res = await getAll();    
    this.setState({ allBooks: res });
  }
  componentDidMount() {
    this.getBooks();    
  }

  render() {
    return (
      <Layout>        
        <Container >
        <Header search={this.state.showSearchPage}/>         
           <Route path='/search' render={ ({ history }) => (
             <SearchPage />
          )} />                           
         <Route exact path='/' render={ () => (  
           <BookLists bookList={this.state.allBooks}/>
          )} />             
        </Container>       
      </Layout>
    )
  }
}

export default BooksApp
