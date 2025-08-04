import React from "react";

export const Badge = ({ children, className }) => (
  <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full ${className}`}>
    {children}
  </span>
);
