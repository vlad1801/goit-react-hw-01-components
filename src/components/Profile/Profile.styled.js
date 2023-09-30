import styled from 'styled-components';

export const Profiles = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding-top: 30px;
  background-color: #fff;
  margin-top: 60px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Paragr = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  color: #768696;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: #f3f6f9;
  border-radius: bottom 5px;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 70px;
  border: 1px solid #e4e9f0;
`;

export const Label = styled.span`
  font-size: 15px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
