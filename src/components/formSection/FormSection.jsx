import React, { useState } from "react";
import {
  FormInputContainerStyle,
  FormInputLabelStyle,
  FormInputStyle,
  FormSectionButtonStyle,
  FormSectionContainerStyle,
  FormSectionHeadingStyle,
  ErrorTextStyle,
} from "./FormSection.style";
import { RegistrationValidation } from "../registrationValidation/RegistrationValidation";

export const FormSection = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setErrors(RegistrationValidation(values));
    clearInputFields();
  };

  const clearInputFields = () => {
    values.username = "";
    values.email = "";
    values.password = "";
  };

  return (
    <FormSectionContainerStyle>
      <FormSectionHeadingStyle>Or</FormSectionHeadingStyle>
      <form>
        <FormInputContainerStyle>
          <FormInputLabelStyle>Name</FormInputLabelStyle>
          <FormInputStyle name="username" type="text" placeholder="&#xf007;  &nbsp; Joy Shaheb" value={values.username} onChange={handleChange} />
          {errors.username && <ErrorTextStyle>{errors.username}</ErrorTextStyle>}
        </FormInputContainerStyle>
        <FormInputContainerStyle>
          <FormInputLabelStyle>Email</FormInputLabelStyle>
          <FormInputStyle name="email" type="email" placeholder="&#xf0e0;  &nbsp; abc@gmail.com" value={values.email} onChange={handleChange} />
          {errors.email && <ErrorTextStyle>{errors.email}</ErrorTextStyle>}
        </FormInputContainerStyle>
        <FormInputContainerStyle>
          <FormInputLabelStyle>Password</FormInputLabelStyle>
          <FormInputStyle
            name="password"
            type="password"
            placeholder="&#xf023;  &nbsp; &#xf111; &#xf111; &#xf111; &#xf111; &#xf111; &#xf111; &#xf111;"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorTextStyle>{errors.password}</ErrorTextStyle>}
        </FormInputContainerStyle>
        <FormSectionButtonStyle onClick={handleFormSubmit}>Submit</FormSectionButtonStyle>
      </form>
    </FormSectionContainerStyle>
  );
};
