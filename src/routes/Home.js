import React from 'react';
import styled from 'styled-components';
import { page } from '../style/mixings';

const HomePage = styled.div`
  ${page}
`;

export default function Home() {
  return (
    <HomePage>
      <h1>Canvas Lab</h1>
    </HomePage>
  );
}
