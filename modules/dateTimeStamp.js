/* eslint-disable import/extensions */
import { DateTime } from './luxon.js';

const dateTimeStamp = () => {
  const dt = DateTime.local();

  const newDate = dt.toLocaleString({
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const newTime = dt.toLocaleString(DateTime.TIME_WITH_SECONDS).toLowerCase();

  document.querySelector('.date').textContent = `${newDate}, ${newTime}`;
};

export default dateTimeStamp;
