import * as React from "react";
export const Button: React.FC<{
  variant?: "filled" | "outlined" | "elevated";
  size?: "small" | "medium" | "large";
}> = (props) => {
  return <button {...props} />;
};
