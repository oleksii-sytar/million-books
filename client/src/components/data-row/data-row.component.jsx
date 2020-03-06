import React from "react";

import Table from "../table/table.component";

import { DataRowWrapper } from "./data-row.styles";

const DataRow = ({
  index,
  list,
  style
}) => {
  const book = list[index];

  return (
    <DataRowWrapper style={style}>
      <Table
        cells={[
          {
            width: 40,
            data: book.name,
          },
          {
            width: 20,
            data: book.author.name,
          },
          {
            width: 10,
            data: book.author.gender,
          },
          {
            width: 30,
            data: book.genre,
          },
        ]}
      />
    </DataRowWrapper>
  )
}

export default list => ({ key, ...props }) => <DataRow key={key} list={list} {...props} />;