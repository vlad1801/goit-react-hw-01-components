import styled from 'styled-components';

export const Statistic = styled.section`
  margin: 100px auto;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Title = styled.h2`
  text-transform: uppercase;
  margin: 30px;
  color: #535d5f;
`;

export const StatList = styled.ul`
  display: flex;
`;

export const ListItem = styled.li`
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  width: 40px;
`;

export const LabelStat = styled.span``;

export const Percentage = styled.span``;
