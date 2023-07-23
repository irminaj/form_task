import React from "react";
import { SocialSectionButtonContainerStyle, SocialSectionContainerStyle, SocialSectionHeadingStyle, SocialSectionLinkStyle, SocialSectionTextStyle } from "./SocialSection.style";
import { Button } from "../button/Button";
import FacebookIcon from "../../assets/facebook.svg";
import GoogleIcon from "../../assets/google.svg";

export const SocialSection = () => {
  return (
    <SocialSectionContainerStyle>
      <SocialSectionHeadingStyle>Get Started</SocialSectionHeadingStyle>
      <SocialSectionTextStyle>Already have an account?</SocialSectionTextStyle>
      <SocialSectionLinkStyle>Log in</SocialSectionLinkStyle>
      <SocialSectionButtonContainerStyle>
        <Button iconSrc={GoogleIcon} text={"sign up"} />
        <Button iconSrc={FacebookIcon} text={"sign up"} />
      </SocialSectionButtonContainerStyle>
    </SocialSectionContainerStyle>
  );
};
