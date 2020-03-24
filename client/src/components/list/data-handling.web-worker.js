const workercode = () => {
  const xhr = new XMLHttpRequest();
  const BooksDB = indexedDB.open('BooksDB', 1);
  let db = null;
  let booksList = [];

  xhr.open('GET', 'http://localhost:3000/api/books');

  xhr.onload = () => {
    booksList = JSON.parse(xhr.response);

    postMessage(booksList);
  };

  BooksDB.onupgradeneeded = (event) => {
    const db = event.target.result;

    if (!db.objectStoreNames.contains('books')) {
      const booksOS = db.createObjectStore('books', { keyPath: '_id' });
      booksOS.createIndex('_id', '_id', { unique: true });
      // const filteredBooksOS = db.createObjectStore('filtered', { keyPath: '_id' });
      // filteredBooksOS.createIndex('_id', '_id', { unique: true });
    }
  };

  BooksDB.onsuccess = (event) => {
    db = event.target.result;
  }

  const filterBooks = searchQuery => {
    const objectStore = db.transaction(['books'], 'readwrite').objectStore('books');
    booksList.forEach(book => objectStore.add(book));

    // booksList.forEach(book => {
    //   if (
    //     book.name.includes(searchQuery) ||
    //     book.author.name.includes(searchQuery) ||
    //     book.author.gender.includes(searchQuery) ||
    //     book.genre.includes(searchQuery)
    //   ) {
    //     // console.log(book._id);
    //   }
    // });
  }

  onmessage = e => {
    if (!booksList.length) {
      xhr.send();
    }
    
    filterBooks(e.data)
  }
};

let code = workercode.toString();
code = code.substring(code.indexOf('{')+1, code.lastIndexOf('}'));

const blob = new Blob([code], {type: 'application/javascript'});
const worker_script = URL.createObjectURL(blob);

export default worker_script;