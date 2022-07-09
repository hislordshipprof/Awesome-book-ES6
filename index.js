/* eslint-disable import/extensions */
import displayPage from './modules/displayPage.js';
import navigationEvent from './modules/navigationEvent.js';
import BookEvent from './modules/BookEvent.js';
import removeBookEvent from './modules/removeBookEvent.js';

document.addEventListener('DOMContentLoaded', () => {
  displayPage.listBooks();
});

navigationEvent();
BookEvent();
removeBookEvent();
