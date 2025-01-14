import React from "react";
import styled from "styled-components";
import { buttonColor, defaultBorderRadius, lightGray, secondaryDark } from "..";

const TopDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  margin: auto;
  width: fit-content;
  cursor: pointer;

  border: 1px solid ${lightGray};

  background-color: ${secondaryDark};
  border-radius: ${defaultBorderRadius};

  &:hover {
    background-color: ${lightGray}55;
  }
`;

const SubDiv = styled.div<{ selected: boolean }>`
  text-align: center;
  padding: 8px 12px;
  border-radius: ${defaultBorderRadius};

  transition: all 0.2s ease-in-out;

  ${(props) =>
    props.selected &&
    `
    background-color: ${buttonColor}77;
    box-shadow: 0px 0px 8px 0px ${lightGray}88;
  
  `}
`;

function Toggle(props: {
  optionOne: string;
  optionTwo: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <TopDiv onClick={props.onClick}>
      <SubDiv selected={props.selected}>{props.optionOne}</SubDiv>
      <SubDiv selected={!props.selected}>{props.optionTwo}</SubDiv>
    </TopDiv>
  );
}

export default Toggle;
