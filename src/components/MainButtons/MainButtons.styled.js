import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background-color: lightgray;
  display: flex;
  align-items: center;
  padding: 16px 16px;
  justify-content: center;
  gap: 30px;
`;

export const Button = styled(Link)`
  color: black;
  text-decoration: none;
  text-align: center;
  min-width: 150px;
  padding: 12px;
  font-size: 20px;
  border: 1px solid black;
`;
