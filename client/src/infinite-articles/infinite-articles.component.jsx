import React from "react";

const InfiniteArticles = ({ books = [] }) => {
  return (
    <div>
      { books.map((book, i) => (
        i <= 1000 ? <div key={book._id}>
          { book.name }
        </div> : ''
      )) }
    </div>
  )
}

export default InfiniteArticles;