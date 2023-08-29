import { BREAKPOINTS } from "constants/sizes";
import { styled } from "styled-components";

type ContainerProps = {
  flex?: boolean;
};

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  display: ${(props) => (props.flex ? "flex" : "block")};

  @media (min-width: ${BREAKPOINTS.xs}) {
    width: 100%;
  }

  @media (min-width: ${BREAKPOINTS.sm}) {
    width: 540px;
  }

  @media (min-width: ${BREAKPOINTS.md}) {
    width: 720px;
  }

  @media (min-width: ${BREAKPOINTS.lg}) {
    width: 960px;
  }

  @media (min-width: ${BREAKPOINTS.xl}) {
    width: 1140px;
  }

  @media (min-width: ${BREAKPOINTS.xx}) {
    width: 1320px;
  }
`;
