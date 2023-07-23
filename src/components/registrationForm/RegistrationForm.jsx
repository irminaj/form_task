import React from "react";
import { Form } from "../form/Form";
import { PictureSection } from "../pictureSection/PictureSection";
import { RegistrationFormContainerStyle } from "./RegistrationForm.style";

export const RegistrationForm = () => {
  return (
    <RegistrationFormContainerStyle>
      <PictureSection />
      <Form />
    </RegistrationFormContainerStyle>
  );
};
