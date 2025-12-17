import React from "react";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export const Section: React.FC<SectionProps> = ({
  id,
  children,
  className = "",
  noPadding = false,
}) => {
  return (
    <section
      id={id}
      className={`relative w-full ${
        !noPadding ? "px-8 py-4  xl:px-10" : ""
      } ${className}`}
    >
      {children}
    </section>
  );
};
