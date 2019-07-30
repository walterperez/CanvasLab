import React from 'react';
import styled from 'styled-components';
import { page } from '../style/mixings';

const PathsPage = styled.div`
  ${page}
`;

export default function Paths() {
  return (
    <PathsPage>
      <h1>Paths</h1>
    </PathsPage>
  );
}
