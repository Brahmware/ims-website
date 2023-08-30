import React from "react";

export interface LayoutProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
};

export interface MainLayoutProps extends LayoutProps {
};