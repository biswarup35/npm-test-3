import * as React from "react";
export const Chips: React.FC<{
  shape?: "rounded" | "square";
  size?: "small" | "medium" | "large";
  trailingIcon?: React.ReactNode;
}> = (props) => {
  return <button {...props} />;
};
