import styled from "styled-components";

export const TableWrapper = styled.div`
  display: flex;
  width: 100%;

  &:even {
    background-color: rgba(0,0,0,.2);
  }
`;

export const TableCell = styled.div`
  display: flex;
  padding-right: 10px;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:last-child {
    padding-right: 0;
  }
`;