import React from 'react';
import styled from 'styled-components';
import { page } from '../style/mixings';

const LinesPage = styled.div`
  ${page}
`;

export default function Lines() {
  return (
    <LinesPage>
      <h1>Lines</h1>
    </LinesPage>
  );
}
