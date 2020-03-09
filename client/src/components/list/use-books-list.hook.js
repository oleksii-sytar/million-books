import { useState, useEffect } from "react";

export default () => {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/books');
      const data = await res.json();

      setBooksList(data);
    })()
  }, []);

  return booksList;
}