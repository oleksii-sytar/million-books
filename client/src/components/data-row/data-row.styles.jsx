import styled from "styled-components";

export const DataRowWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:nth-child(even) {
    background-color: rgba(0,0,0,.05);
  }
`;