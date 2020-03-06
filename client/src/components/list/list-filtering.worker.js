import { exposeWorker } from 'react-hooks-worker';

const filteredList = ({ booksList, searchQuery }) => booksList.filter(book => {
  return (
    book.name.includes(searchQuery) ||
    book.author.name.includes(searchQuery) ||
    book.author.gender.includes(searchQuery) ||
    book.genre.includes(searchQuery)
  )
});

exposeWorker(filteredList);