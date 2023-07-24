import { styled } from "styled-components";

export const FormSectionContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
`;

export const FormSectionHeadingStyle = styled.h2`
  font-size: 42px;
  font-weight: 400;
  text-align: center;
  margin-bottom: 10px;
`;

export const FormInputContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const FormInputLabelStyle = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const FormInputStyle = styled.input`
  font-family: FontAwesome, "Poppins", sans-serif;
  font-size: 18px;
  padding: 8px;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.steelGrey};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;

export const FormSectionButtonStyle = styled.button`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  padding: 8px 0;
  margin-top: 20px;
  outline: none;
`;

export const ErrorTextStyle = styled.p`
  color: ${(props) => props.theme.colors.primary};
  margin: 5px 0 0 0;
`;
