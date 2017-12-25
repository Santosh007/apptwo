import React from 'react';
import styled from 'styled-components';
import {List, ListItem, ListItemText} from 'material-ui/List';

const SentMsg = styled(ListItem)`
      background-color: rgba(45, 179, 111, 0.35);
      background-size: initial;
      margin-left: 50%;
      border-radius: 10px 10px 0px 10px;
`;

export const Sent = function (props){
  return (
    <SentMsg   {...props}/>
  );
}


const recievedMsgListItem = styled(ListItem)``;
