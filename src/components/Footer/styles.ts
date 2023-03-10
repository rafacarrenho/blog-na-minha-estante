import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.fuchsia[200]};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    padding: 16px 0px;
    margin-top: 64px;
  `}
`;

export const ContentText = styled.p`
  ${({ theme }) => css`
    text-transform: uppercase;
    text-align: center;
    font-size: ${theme.font.sizes.sm};
  `}
`;
