/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import displayPage from './displayPage.js';

import StoreBookShelve from './StoreBookShelve.js';

const removeBookEvent = () => {
  // Event: Remove book
  document.querySelector('.container').addEventListener('click', (e) => {
    // Remove from ui
    displayPage.removeBook(e.target);

    // Remove from local storage
    const title = e.target.previousElementSibling.previousElementSibling.textContent.replace(
      /[^a-z0-9]/gi,
      '',
    );
    StoreBookShelve.removeBook(title);
  });
};

export default removeBookEvent;
