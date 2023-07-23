import React from "react";
import { ButtonStyle, SocialIconStyle } from "./Button.style";

export const Button = ({ iconSrc, text, buttonVariant }) => {
  return (
    <ButtonStyle variant={buttonVariant}>
      <SocialIconStyle src={iconSrc} />
      {text}
    </ButtonStyle>
  );
};
