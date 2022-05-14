import * as React from "react";
export const Button: React.FC<{
  variant?: "filled" | "outlined" | "elevated";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "default";
}> = (props) => {
  return <button {...props} />;
};
