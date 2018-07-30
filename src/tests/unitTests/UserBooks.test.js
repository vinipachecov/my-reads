import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import SearchPage from "../../components/Navigation/SearchPage/SearchPage";
import { BrowserRouter } from 'react-router-dom'
import UserBooks from '../../components/UserBooks/UserBooks';



const bookList = [
  {
    id: 1,  
    shekf: 'x'  
  },
  {
    id: 2,    
  }
]
describe('UserBooks', () => {
  beforeEach(() => {
    
  })

  it('render UserBooks', () => {
    const bookList = []
    const bookUpdate = jest.fn();
    const wrapper = shallow(
    <UserBooks 
      bookList={bookList}
      bookUpdate={bookUpdate}
    />
  );
    expect(wrapper);
  })

  it('UserBook find links', () => {
    const testBookList = [
      {
        id: 1,    
      },
      {
        id: 2,    
      },
      {
        id: 3,    
      },
      {
        id: 4,    
      },
      {
        id: 5,    
      }
    ];
    const bookList = []
    const bookUpdate = jest.fn();
    const wrapper = shallow(
      <UserBooks 
        bookList={testBookList}
        bookUpdate={bookUpdate}
      />
    );
    const links = wrapper.find('Link');
    expect(links).toHaveLength(1);
  })
    
  it('UserBook find links', () => {
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
    const bookList = []
    const bookUpdate = jest.fn();
    const wrapper = shallow(
      <UserBooks 
        bookList={testBookList}
        bookUpdate={bookUpdate}
      />
    );
    // const onSearchTextChange = jest.spyOn(wrapper.instance(), 'UserBooks');
  })
})

