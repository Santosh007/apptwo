import React from 'react';
import styled from 'styled-components';

const Grayface = styled.div`
  display: inline-block;
  width: 25px;
  height: 25px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  border: 1px solid gray;
  background: rgba(255, 255, 255, 0.9)
`
const Eyes = styled.div`
  width:12.5px;
  margin: 0 auto;
  position: relative;
  top: 7.5px;
`
const LeftEye = styled.div`
  background-color: #87500b;
  height: 3.75px;
  width: 3.75px;
  border-radius: 50%;
  position: absolute;
  left: 0px;
`
const RightEye = styled.div`
  background-color: #87500b;
  height: 3.75px;
  width: 3.75px;
  border-radius: 50%;
  position: absolute;
  right: 0px;
`
const Smile = styled.div`
  display: block;
  position: absolute;
  height: 7.5px;
  width: 15px;
  border-bottom-color: gray;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-radius: 0px 0px 25px 25px;
  bottom: 5px;
  left: 5px;
`
export default class EmoBtn extends React.Component {
  render(){
      return(
        <Grayface>
          <Eyes>
            <LeftEye/>
            <RightEye/>
          </Eyes>
          <Smile/>
        </Grayface>
    )
  }
}
