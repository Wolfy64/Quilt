import React from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';

const LOGIN = <a href='/auth/facebook/callback'>Login</a>;
const LOGOUT = <a href='/api/logout'>Logout</a>;

const Ul = styled.ul`
  display: flex;
  li {
    align-self: center;
    margin-left: 5px;
  }

  span {
    color: ${props => props.theme.colors.secondary};
    font-weight: 600;
  }
`;

const FaceBook = props => {
  const { auth } = props;

  if (!auth) return <Button children={LOGIN} />;

  return (
    <Ul>
      <li>
        <Button children={LOGOUT} />
      </li>
    </Ul>
  );
};

export default FaceBook;
