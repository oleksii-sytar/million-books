import React, { useState, useEffect } from "react";
import List from "react-virtualized/dist/commonjs/List";

import dataRow from "../data-row/data-row.component";
import Search from "../search/search.component";

import { ListContainer, RowsCountContainer } from "./list.styles";
// import useBooksList from "./use-books-list.hook";

import data_handling_worker from "./data-handling.web-worker";
const dataHandlingWorker = new Worker(data_handling_worker);

const ListComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    dataHandlingWorker.postMessage(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    dataHandlingWorker.onmessage = (m) => {
      setBooksList(m.data);
    };
  }, []);

  return (
    <div>
      <Search submitHandler={d => { setSearchQuery(d) }} />

      <RowsCountContainer>
        Results: { booksList.length || 'Data fetching...' }
      </RowsCountContainer>

      <ListContainer>
        {
          booksList.length ?
          <List
            width={800}
            height={380}
            rowCount={booksList.length}
            rowHeight={40}
            rowRenderer={dataRow(booksList)}
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
