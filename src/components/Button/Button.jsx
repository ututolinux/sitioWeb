import PropTypes from "prop-types";
import { StyledButton } from "./StyledButton";

export const Button = ({ variant, size, type, children, hasIcon, icon }) => (
  <StyledButton $variant={variant} $size={size} $type={type}>
    {hasIcon && icon}
    {children}
  </StyledButton>
);

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "light-primary",
    "light-secondary",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  type: PropTypes.oneOf(["regular", "outline", "pilled"]),
  children: PropTypes.node,
  hasIcon: PropTypes.bool,
  icon: PropTypes.element,
};

Button.defaultProps = {
  variant: "primary",
  size: "md",
  type: "regular",
  hasIcon: false,
};
