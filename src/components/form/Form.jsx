import React from "react";
import { SocialSection } from "../socialSection/SocialSection";
import { FormSection } from "../formSection/FormSection";
import { FormContainerStyle } from "./Form.style";

export const Form = () => {
  return (
    <FormContainerStyle>
      <SocialSection />
      <FormSection />
    </FormContainerStyle>
  );
};
