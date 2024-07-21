"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  0%, 100% { opacity: 0; }
  50% { opacity: 1; }
`;

const change = keyframes`
  0%, 12.66%, 100% { transform: translate3d(0, 0, 0); }
  16.66%, 29.32% { transform: translate3d(0, -100%, 0); }
  33.32%, 45.98% { transform: translate3d(0, -200%, 0); }
  49.98%, 62.64% { transform: translate3d(0, -300%, 0); }
  66.64%, 79.3% { transform: translate3d(0, -200%, 0); }
  83.3%, 95.96% { transform: translate3d(0, -100%, 0); }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  height: 50px;
  padding: 0 40px;
  position: relative;

  &:before {
    content: "[";
    position: absolute;
    top: 0;
    left: 0;
    color: #16a085;
    font-size: 30px;
    line-height: 50px;
    animation: ${opacity} 2s infinite;
  }

  &:after {
    content: "]";
    position: absolute;
    top: 0;
    right: 0;
    color: #16a085;
    font-size: 30px;
    line-height: 50px;
    animation: ${opacity} 2s infinite;
  }
`;

const Text = styled.p`
  display: inline;
  margin: 0;
  line-height: 50px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  animation: ${change} 10s infinite;
  display: inline-block;
  vertical-align: top;
  height: 50px;
`;

const ListItem = styled.li`
  padding-left: 50px;
  line-height: 50px;
  height: 50px;

  &:nth-child(1) {
    color: red;
  }
  &:nth-child(2) {
    color: green;
  }
  &:nth-child(3) {
    color: blue;
  }
  &:nth-child(4) {
    color: purple;
  }
`;

const AnimatedText: React.FC = () => {
  return (
    <TextContainer>
      <Text>Hello</Text>
      <List>
        <ListItem>1111111111</ListItem>
        <ListItem>222</ListItem>
        <ListItem>333</ListItem>
        <ListItem>444</ListItem>
      </List>
    </TextContainer>
  );
};

export default AnimatedText;
