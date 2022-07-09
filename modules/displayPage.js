/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import StoreBookShelve from './StoreBookShelve.js';
import dateTimeStamp from './dateTimeStamp.js';
// class displayPage
export default class displayPage {
  // display books
  static listBooks() {
    const books = StoreBookShelve.getBooks();

    books.forEach((book) => {
      displayPage.addBookList(book);
    });

    dateTimeStamp();
  }
  // add book to displayPage

  static addBookList(book) {
    const container = document.querySelector('.container');

    const ul = document.createElement('ul');

    ul.innerHTML = `
      <li>"${book.title}"</li>
      <li>by ${book.author}</li>
     
      <button class="delete" type="button">Remove</button>
    `;
    container.appendChild(ul);
  }

  static removeBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  static Alert(errormessage, className) {
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(errormessage));
    const body = document.querySelector('body');
    const form = document.querySelector('#add-book');
    body.insertBefore(div, form);

    setTimeout(() => document.querySelector('.alert').remove(), 3000);
  }

  // clear input form
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
