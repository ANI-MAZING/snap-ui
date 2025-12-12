import React from "react";

export const Sheet = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
};

export const SheetTrigger = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};

export const SheetContent = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <div className={className}>{children}</div>;
};
