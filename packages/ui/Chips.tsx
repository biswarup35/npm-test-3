import * as React from "react";
export const Chips: React.FC<{
  shape?: "rounded" | "square";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "success" | "warning" | "danger" | "light" | "dark";
  trailingIcon?: React.ReactNode;
}> = (props) => {
  return <button {...props} />;
};
