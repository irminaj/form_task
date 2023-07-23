import React from "react";
import { FormInputContainerStyle, FormInputStyle } from "./FormSection.style";

export const FormSection = () => {
  return (
    <div>
      <h1>Or</h1>
      <form>
        <FormInputContainerStyle>
          <label>Name</label>
          <FormInputStyle placeholder="&#xf007;  &nbsp; Joy Shaheb"></FormInputStyle>
        </FormInputContainerStyle>
        <FormInputContainerStyle>
          <label>Email</label>
          <FormInputStyle placeholder="&#xf0e0;  &nbsp; abc@gmail.com"></FormInputStyle>
        </FormInputContainerStyle>
        <FormInputContainerStyle>
          <label>Password</label>
          <FormInputStyle placeholder="&#xf023;  &nbsp; &#xf111; &#xf111; &#xf111; &#xf111; &#xf111; &#xf111; &#xf111;"></FormInputStyle>
        </FormInputContainerStyle>
        <button>Submit</button>
      </form>
    </div>
  );
};
