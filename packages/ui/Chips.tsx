import * as React from "react";
export const Chips: React.FC<{
  shape?: "rounded" | "square";
}> = (props) => {
  return <button {...props} />;
};
