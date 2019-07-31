import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarComponent = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  margin: 0;
`;

const Menu = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  > a {
    padding: 1em 1em;
    text-decoration: none;
    color: white;

    &:hover {
      background-color: #1f1f14;
    }
  }
`;

export default function NavBar() {
  return (
    <NavBarComponent>
      <Menu>
        <Link to={'/'}>Home</Link>
        <Link to={'/lines'}>Lines</Link>
        <Link to={'/rectangles'}>Rectangles</Link>
        <Link to={'/circles'}>Circles</Link>
        <Link to={'/paths'}>Paths</Link>
        <Link to={'/shapecolision'}>ShapeColision</Link>
      </Menu>
    </NavBarComponent>
  );
}
