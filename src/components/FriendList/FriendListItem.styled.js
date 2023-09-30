import styled from 'styled-components';

export const Friendsitem = styled.li`
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
  width: 280px;
  margin: 5px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

export const StatusFriends = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 5px;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const AvatarFriends = styled.img`
  margin: 0 15px;
`;

export const NameFriends = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
