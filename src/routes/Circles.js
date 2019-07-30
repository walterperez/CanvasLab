import React from 'react';
import styled from 'styled-components';
import { page } from '../style/mixings';

const CirclesPage = styled.div`
  ${page}
`;

export default function Circles() {
  return (
    <CirclesPage>
      <h1>Circles</h1>
    </CirclesPage>
  );
}
