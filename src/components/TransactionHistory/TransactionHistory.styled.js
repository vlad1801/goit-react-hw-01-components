import styled from 'styled-components';

export const Transactstory = styled.table`
  margin: 100px auto;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  width: 700px;
  border-radius: 5px;
`;
export const THeader = styled.th`
  background-color: #00bcd5;
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding: 10px;
`;
export const TRow = styled.tr`
  &:nth-of-type(even) {
    background-color: #ecf1f4;
  }
`;
export const TData = styled.td`
  text-align: center;
  padding: 10px;
  text-transform: capitalize;
  border: 1px solid #cecece;
`;
