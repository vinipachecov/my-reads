import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import SearchPage from "../../components/Navigation/SearchPage/SearchPage";
import { BrowserRouter } from 'react-router-dom'


const bookAreas = ['Android', 'Art', 'Artificial Intelligence', 'Astronomy',
 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business',
 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling',
 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas',
 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football',
 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King',
 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery',
 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 
 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare',
 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 
 'Web Development', 'iOS'
];

const bookList = [
  {
    id: 1,      
  },
  {
    id: 2,    
  },
  {
    id: 3,    
  }
]

describe('Unit Test Search Page', () => {

  beforeAll(() => {
    test =  (query) => {    
      return bookList;     
    }
  })

  it('Render the component calling the onComponentDidMount routines', () => {
    const onBookChangeShelf = jest.fn();
    const queryBooks = jest.fn();   
    const onHeaderChange = jest.fn();    

    const wrapper = shallow(
    <SearchPage  
      onSearch={onHeaderChange}
      queryBooks={queryBooks}      
      bookUpdate={onBookChangeShelf}   
      userBooks={[]}
      bookAreas={bookAreas}
    />)    
    expect(onHeaderChange).toHaveBeenCalledTimes(1);    
  });

  it('Checking if there is a link in SearchPage', () => {
    const onBookChangeShelf = jest.fn();
    const queryBooks = jest.fn();   
    const onHeaderChange = jest.fn();    

    const wrapper = shallow(
    <SearchPage  
      onSearch={onHeaderChange}
      queryBooks={queryBooks}      
      bookUpdate={onBookChangeShelf}   
      userBooks={[]}
      bookAreas={bookAreas}
    />)    
    const Links = wrapper.find('Link');    
    expect(Links).toHaveLength(1)    
  });
  

  it('Getting back to the home screen from the search page', () => {
    const onBookChangeShelf = jest.fn();
    const queryBooks = jest.fn();   
    const onHeaderChange = jest.fn();    

    const wrapper = shallow(
    <SearchPage  
      onSearch={onHeaderChange}
      queryBooks={queryBooks}      
      bookUpdate={onBookChangeShelf}   
      userBooks={[]}
      bookAreas={bookAreas}
    />)    
    const Link = wrapper.find('Link');    
    Link.simulate('click');        
    expect(onHeaderChange).toHaveBeenCalledTimes(2);
  });


  it('onSearchTextChange being called after input change', () => {
    const onBookChangeShelf = jest.fn();
    const queryBooks = jest.fn();   
    const onHeaderChange = jest.fn();    

    
    const wrapper = shallow(      
    <SearchPage  
      onSearch={onHeaderChange}
      queryBooks={queryBooks}      
      bookUpdate={onBookChangeShelf}   
      userBooks={[]}
      bookAreas={bookAreas}
    />)                        
    const spy = jest.spyOn(wrapper.instance(), 'onSearchTextChange');
    wrapper.update()
    const input = wrapper.find("input");
    input.simulate('change', { target: { value: 'android' }});        
    expect(spy).toHaveBeenCalledTimes(1);   
    expect(queryBooks).toHaveBeenCalledTimes(1);       
     
  });

  it('onSearchTextChange being called with no input', () => {
    const onBookChangeShelf = jest.fn();
    const queryBooks = jest.fn();   
    const onHeaderChange = jest.fn(); 
    const wrapper = shallow(      
    <SearchPage  
      onSearch={onHeaderChange}
      queryBooks={queryBooks}      
      bookUpdate={onBookChangeShelf}   
      userBooks={[]}
      bookAreas={bookAreas}
    />)                        
    const spy = jest.spyOn(wrapper.instance(), 'onSearchTextChange');
    wrapper.setState({ searchText: '123'});
    wrapper.update()
    const input = wrapper.find("input");
    input.simulate('change', { target: { value: '' }});        
    expect(spy).toHaveBeenCalledTimes(1);
    expect(queryBooks).toHaveBeenCalledTimes(0);    
  });

  it('onSearchTextChange being called with empty space', () => {
    const onBookChangeShelf = jest.fn();
    const queryBooks = jest.fn();   
    const onHeaderChange = jest.fn(); 
    const wrapper = shallow(      
    <SearchPage  
      onSearch={onHeaderChange}
      queryBooks={queryBooks}      
      bookUpdate={onBookChangeShelf}   
      userBooks={[]}
      bookAreas={bookAreas}
    />)                        
    const spy = jest.spyOn(wrapper.instance(), 'onSearchTextChange');
    wrapper.setState({ searchText: '123'});
    wrapper.update()
    const input = wrapper.find("input");
    input.simulate('change', { target: { value: ' ' }});        
    expect(spy).toHaveBeenCalledTimes(1);
    expect(queryBooks).toHaveBeenCalledTimes(0);    
  });

  it('onSearchTextChange being called with term not in search API terms', () => {
    const onBookChangeShelf = jest.fn();
    const queryBooks = jest.fn();   
    const onHeaderChange = jest.fn(); 
    const wrapper = shallow(      
    <SearchPage  
      onSearch={onHeaderChange}
      queryBooks={queryBooks}      
      bookUpdate={onBookChangeShelf}   
      userBooks={[]}
      bookAreas={bookAreas}
    />)                        
    const spy = jest.spyOn(wrapper.instance(), 'onSearchTextChange');
    wrapper.setState({ searchText: '123'});
    wrapper.update()
    const input = wrapper.find("input");
    input.simulate('change', { target: { value: 'direito' }});        
    expect(spy).toHaveBeenCalledTimes(1);
    expect(queryBooks).toHaveBeenCalledTimes(0);    
  });


  it('onSearchTextChange being called with a term in the search terms list', () => {
    const onBookChangeShelf = jest.fn();    
    const onHeaderChange = jest.fn(); 
    const wrapper = shallow(      
    <SearchPage  
      onSearch={onHeaderChange}
      queryBooks={test}      
      bookUpdate={onBookChangeShelf}   
      userBooks={[]}
      bookAreas={bookAreas}
    />)                        
    const onSearchTextChange = jest.spyOn(wrapper.instance(), 'onSearchTextChange');
    const compareShelfs = jest.spyOn(wrapper.instance(), 'compareShelfs');     
    wrapper.setState({ searchText: '123'});
    wrapper.update()
    const input = wrapper.find("input");
    input.simulate('change', { target: { value: 'Android' }} );        
    expect(onSearchTextChange).toHaveBeenCalledTimes(1);            
    
    // wait for the async function search in the book api
    setImmediate(() => {
      expect(compareShelfs).toHaveBeenCalledTimes(1);           
    })    
  });
  
  it('Test list Length', () => {
    const onBookChangeShelf = jest.fn();
    const queryBooks = jest.fn();   
    const onHeaderChange = jest.fn();    

    
    const wrapper = shallow(      
    <SearchPage  
      onSearch={onHeaderChange}
      queryBooks={queryBooks}      
      bookUpdate={onBookChangeShelf}   
      userBooks={[]}
      bookAreas={bookAreas}
    />)                    
     const list = wrapper.find("ol");
     expect(list.children()).toHaveLength(1);
  });
  
  
   
})
