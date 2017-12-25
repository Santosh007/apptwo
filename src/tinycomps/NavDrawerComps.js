import React from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';
import MenuItem from 'material-ui/MenuItem';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledMenuItem = styled(MenuItem)`
  color: palevioletred;
  font-weight: bold;
`;

export const NavLinks = function(props){
  return (
    <StyledLink {...props}/>
  );
}

export const NavMenuItem = function(props){
  return (
    <StyledMenuItem {...props}/>
  );
}
