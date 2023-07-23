import React from "react";
import { ButtonStyle } from "./Button.style";

export const Button = ({ iconSrc, text }) => {
  return (
    <ButtonStyle>
      <img src={iconSrc} />
      {text}
    </ButtonStyle>
  );
};
