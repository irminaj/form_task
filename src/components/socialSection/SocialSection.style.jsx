import { styled } from "styled-components";

export const SocialSectionContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const SocialSectionHeadingStyle = styled.h1`
  font-size: 42px;
  margin-bottom: 10px;
`;

export const SocialSectionTextStyle = styled.p`
  font-size: 16px;
  opacity: 90%;
  margin: 0;
`;

export const SocialSectionLinkStyle = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.primary};
  opacity: 90%;
  margin: 0;
`;

export const SocialSectionButtonContainerStyle = styled.div`
  display: flex;
  fkex-direction: column;
  gap: 5%;
  margin-top: 15px;
`;
