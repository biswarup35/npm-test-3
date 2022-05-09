import * as React from "react";
export const Button: React.FC<{
  variant?: "primary" | "secondary" | "tertiary";
}> = (props) => {
  return <button {...props} />;
};
