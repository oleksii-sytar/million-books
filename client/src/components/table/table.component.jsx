import React from "react";

import { TableWrapper, TableCell } from "./table.styles";

const Table = ({ cells = [] }) => {
  return (
    <TableWrapper>
      { 
        cells.map(cell => (
          <TableCell
            key={`${cell.width}.${cell.data}`}
            style={{ width: cell.width ? `${cell.width}%` : 'auto' }}
            title={cell.data}
          >
            <span>{ cell.data }</span>
          </TableCell>
        )) 
      }
    </TableWrapper>
  )
}

export default Table;