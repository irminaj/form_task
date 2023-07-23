import React from "react";
import { PictureSectionContainerStyle, IconContainerStyle, IllustrationStyle, PictureSectionTextStyle } from "./PictureSection.style";
import Illustration from "../../assets/illustration.svg";
import Logo from "../../assets/logo.svg";

export const PictureSection = () => {
  return (
    <PictureSectionContainerStyle>
      <IconContainerStyle>
        <img src={Logo} />
      </IconContainerStyle>
      <IllustrationStyle src={Illustration} />
      <PictureSectionTextStyle>Start for free & Get Attractive offers Today</PictureSectionTextStyle>
    </PictureSectionContainerStyle>
  );
};
