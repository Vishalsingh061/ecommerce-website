import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }

  `;
};

export const tablet = (props) => {
  return css`
    @media (min-width: 786px) and (max-width: 992px) {
      ${props}
    }

  `;
};
