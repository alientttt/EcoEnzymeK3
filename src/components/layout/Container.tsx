import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`w-full max-w-[1440px] mx-auto ${className}`}>
      {children}
    </div>
  );
};
