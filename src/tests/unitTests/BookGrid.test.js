import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import { BrowserRouter } from 'react-router-dom'
import BookGrid from '../../components/BookGrid/BookGrid';

describe('[Component] BookGrid', () => {
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
    expect(shallow(<BookGrid bookList={testBookList} bookUpdate={bookUpdate}/>))    
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
    const wrappper = shallow(<BookGrid bookList={testBookList} bookUpdate={bookUpdate} />);
    const lis = wrappper.find('li');
    expect(lis).toHaveLength(5);
  })  
})
