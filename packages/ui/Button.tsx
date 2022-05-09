import * as React from "react";
export const Button: React.FC<{
  variant?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
}> = (props) => {
  return <button {...props} />;
};
