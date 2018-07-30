import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import BookShelf from '../../components/BookShelf/BookShelf';

describe('[Component] BookShelf', () => {
  it('Renders component without crash', () => {
    const testBookList = [
      {
        id: 1, 
        shelf: 'read'   
      },
      {
        id: 2,    
        shelf: 'read'   
      },
      {
        id: 3,    
        shelf: 'read'   
      },
      {
        id: 4,    
        shelf: 'x'   
      },
      {
        id: 5,    
        shelf: 'read'   
      }
    ];
    const bookUpdate = jest.fn();
    expect(shallow(<BookShelf bookList={testBookList} bookUpdate={bookUpdate}/>))    
  })

  it('Renders component list without crash', () => {
    const testBookList = [
      {
        id: 1, 
        shelf: 'read'   
      },
      {
        id: 2,    
        shelf: 'read'   
      },
      {
        id: 3,    
        shelf: 'read'   
      },
      {
        id: 4,    
        shelf: 'x'   
      },
      {
        id: 5,    
        shelf: 'read'   
      }
    ];
    const bookUpdate = jest.fn();
    const wrappper = shallow(<BookShelf bookList={testBookList} bookUpdate={bookUpdate} />);
    const child = wrappper.find('BookGrid');
    expect(child).toHaveLength(1);    
  })  
})
