/* eslint-disable import/extensions */
import Book from './Book.js';
import displayPage from './displayPage.js';
import StoreBookShelve from './StoreBookShelve.js';

const BookEvent = () => {
  // Event: Add Book
  document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Get values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;

    // Validate form inputs
    if (title === '' || author === '') {
      displayPage.Alert('Please fill in all fields', 'error');
    } else {
      const book = new Book(title, author);

      displayPage.addBookTodisplayPage(book);

      StoreBookShelve.StoreBook(book);

      displayPage.clearFields();

      displayPage.Alert('Book added', 'success');
    }
  });
};

export default BookEvent;
