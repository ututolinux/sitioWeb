import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  border: none;
  outline: none;
  font-weight: var(--weight-regular);
  transition: var(--transition-fast);
  border-radius: ${({ $type }) => ($type === "pilled" ? "20px" : "5px")};
  background-color: ${({ $variant }) => {
    switch ($variant) {
      case "primary":
        return "var(--color-dark-violet)";
      case "secondary":
        return "var(--color-yellow)";
      case "tertiary":
        return "var(--color-brown)";
      case "quaternary":
        return "var(--color-green)";
      case "light-primary":
        return "var(--color-white)";
      case "light-secondary":
        return "var(--color-white)";
      default:
        return "var(--color-dark-violet)";
    }
  }};
  color: ${({ $variant }) =>
    $variant.includes("light")
      ? "var(--color-dark-violet)"
      : "var(--color-white)"};
  font-size: ${({ $size }) => {
    switch ($size) {
      case "sm":
        return "var(--text-sm)";
      case "md":
        return "var(--text-md)";
      case "lg":
        return "var(--text-md)";
      default:
        return "var(--text-md)";
    }
  }};
  padding: ${({ $size }) => {
    switch ($size) {
      case "sm":
        return "5px 10px";
      case "md":
        return "5px 15px";
      case "lg":
        return "10px 25px";
      default:
        return "5px 15px";
    }
  }};
  ${({ $type }) =>
    $type === "outline" &&
    css`
      background-color: transparent;
      border: 1px solid var(--color-black);
      color: var(--color-black);
    `}

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--color-black);
  }

  &:hover {
    filter: brightness(110%);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.95);
  }
`;
