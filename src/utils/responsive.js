import {css} from 'styled-components';

export const media = {
  handheld : function (...args) {
    return css`
    @media (max-width : 800px){
      ${css(...args) }
    }
    `;
  }
}
