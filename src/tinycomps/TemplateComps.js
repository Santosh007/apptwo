import React from 'react';
import styled from 'styled-components';
import {media} from '../utils/responsive'

export const Container = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    margin : auto;
    width : 80%;
    min-height : 80vh;
    ${media.handheld`
        width : 100%;
      `}
`

export const Main = function (props){
  return (
    <Container>
      {props.children}
    </Container>
  );
}
