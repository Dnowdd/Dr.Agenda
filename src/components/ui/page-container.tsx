import React from "react";

export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6 p-6">{children}</div>;
};

export const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

export const PageHeaderContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="space-y-1">{children}</div>;
};

export const PageTitle = ({ children }: { children: React.ReactNode }) => {
  return <div className="text-2xl font-bold">{children}</div>;
};

export const PageDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="text-muted-foreground text-sm">{children}</div>;
};

export const PageActions = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

export const PageContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6">{children}</div>;
};
