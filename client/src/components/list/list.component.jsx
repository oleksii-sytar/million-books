import React, { useState, useMemo, Fragment } from "react";
import List from "react-virtualized/dist/commonjs/List";

import dataRow from "../data-row/data-row.component";
import Search from "../search/search.component";

import { ListContainer, RowsCountContainer } from "./list.styles";
import useBooksList from "./use-books-list.hook";

const ListComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const booksList = useBooksList();

  const filteredList = useMemo(
    () => booksList.filter(book => (
      book.name.includes(searchQuery) ||
      book.author.name.includes(searchQuery) ||
      book.author.gender.includes(searchQuery) ||
      book.genre.includes(searchQuery)
    )),
    [booksList, searchQuery]
  );

  return (
    <div>
      <Search submitHandler={d => { setSearchQuery(d) }} />

      <RowsCountContainer>
        Results: { booksList.length ? filteredList.length : 'Data fetching...'  }
      </RowsCountContainer>

      <ListContainer>
        {
          booksList.length ?
          <List
            width={800}
            height={380}
            rowCount={filteredList.length}
            rowHeight={40}
            rowRenderer={dataRow(filteredList)}
          /> :
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        }
      </ListContainer>
    </div>
  )
}

export default ListComponent;
