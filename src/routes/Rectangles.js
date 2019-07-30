import React from 'react';
import styled from 'styled-components';
import { page } from '../style/mixings';

const RectanglesPage = styled.div`
  ${page}
`;

export default function Rectangles() {
  return (
    <RectanglesPage>
      <h1>Rectangles</h1>
    </RectanglesPage>
  );
}
