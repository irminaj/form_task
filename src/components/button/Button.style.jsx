import { styled, css } from "styled-components";

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  border-radius: 5px;
  font-size: 20px;
  font-weight: 400;
  width: 45%;
  ${(props) => {
    if (props.variant === "fbButton") {
      return css`
        background-color: ${(props) => props.theme.colors.blue};
        color: ${(props) => props.theme.colors.white};
        border: none;
      `;
    } else if (props.variant === "googleButton") {
      return css`
        background-color: ${(props) => props.theme.colors.white};
        border: 3px solid;
        border-color: ${(props) => props.theme.colors.steelGrey};
      `;
    }
  }}
`;

export const SocialIconStyle = styled.img`
  width: 28px;
  padding-right: 5px;
`;
