import * as React from "react";
export const Chips: React.FC<{
  shape?: "rounded" | "square";
  size?: "small" | "medium" | "large";
}> = (props) => {
  return <button {...props} />;
};
