import React from "react";
import { FormInputContainerStyle, FormInputLabelStyle, FormInputStyle, FormSectionButtonStyle, FormSectionContainerStyle, FormSectionHeadingStyle } from "./FormSection.style";

export const FormSection = () => {
  return (
    <FormSectionContainerStyle>
      <FormSectionHeadingStyle>Or</FormSectionHeadingStyle>
      <form>
        <FormInputContainerStyle>
          <FormInputLabelStyle>Name</FormInputLabelStyle>
          <FormInputStyle placeholder="&#xf007;  &nbsp; Joy Shaheb"></FormInputStyle>
        </FormInputContainerStyle>
        <FormInputContainerStyle>
          <FormInputLabelStyle>Email</FormInputLabelStyle>
          <FormInputStyle placeholder="&#xf0e0;  &nbsp; abc@gmail.com"></FormInputStyle>
        </FormInputContainerStyle>
        <FormInputContainerStyle>
          <FormInputLabelStyle>Password</FormInputLabelStyle>
          <FormInputStyle placeholder="&#xf023;  &nbsp; &#xf111; &#xf111; &#xf111; &#xf111; &#xf111; &#xf111; &#xf111;"></FormInputStyle>
        </FormInputContainerStyle>
        <FormSectionButtonStyle>Submit</FormSectionButtonStyle>
      </form>
    </FormSectionContainerStyle>
  );
};
