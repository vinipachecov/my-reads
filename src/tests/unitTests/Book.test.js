import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import Book from '../../components/Book/Book';


const data = {  
  allowAnonLogging:true,
  authors:(2) ["Robert Bruce Thompson", "Barbara Fritchman Thompson"],
  averageRating:5,
  canonicalVolumeLink:"https://books.google.com/books/about/Astronomy_Hacks.html?hl=&id=piwP9HXtpvUC",
  categories:["Nature"],
  contentVersion:"1.0.0.0.preview.1",
  description:"Astronomy Hacks begins the space exploration by getting you set up with the right equipment for observing and admiring the stars in an urban setting. Along for the trip are first rate tips for making most of observations. The hacks show you how to: Dark-Adapt Your Notebook Computer. Choose the Best Binocular. Clean Your Eyepieces and Lenses Safely. Upgrade Your Optical Finder. Photograph the Stars with Basic Equipment.",
  id:"piwP9HXtpvUC",
  imageLinks:{smallThumbnail: "http://books.google.com/books/content?id=piwP9HXtp…=frontcover&img=1&zoom=5&edge=curl&source=gbs_api", thumbnail: "http://books.google.com/books/content?id=piwP9HXtp…=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"},
  infoLink:"http://books.google.com/books?id=piwP9HXtpvUC&dq=astronomy&hl=&source=gbs_api",
  language:"en",
  maturityRating:"NOT_MATURE",
  pageCount:388,
  previewLink:"http://books.google.com/books?id=piwP9HXtpvUC&printsec=frontcover&dq=astronomy&hl=&cd=19&source=gbs_api",
  printType:"BOOK",
  publishedDate:"2005",
  publisher:"O'Reilly Media, Inc.",
  ratingsCount:1,
  readingModes: {text: false, image: true},
  shelf:"wantToRead",
  title: "Astronomy Hacks"
}

const func = () => console.log(test)

describe('Book Unit Test', () => {
  
  it('Render Book', () => {
    const update = jest.fn();
    expect(shallow(<Book data={data} bookUpdate={update} />));
  })

  it('Render Book', () => {
    const update = jest.fn();
    const book = shallow(<Book data={data} bookUpdate={update} />);       
    const bookSelector = book.find('select');
    bookSelector.simulate('change', { target: {value:'read' }});    
    expect(update).toHaveBeenCalledTimes(1);    
  });
  
})
