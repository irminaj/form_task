import React from "react";
import { ButtonStyle, SocialIconStyle } from "./Button.style";

export const Button = ({ iconSrc, text }) => {
  return (
    <ButtonStyle>
      <SocialIconStyle src={iconSrc} />
      {text}
    </ButtonStyle>
  );
};
