import React from "react";

export const Card = ({ children, className }) => (
  <div className={`bg-white rounded-xl shadow border ${className}`}>{children}</div>
);

export const CardHeader = ({ children }) => (
  <div className="p-4 border-b border-gray-100">{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h3 className={`text-lg font-bold ${className}`}>{children}</h3>
);

export const CardContent = ({ children }) => (
  <div className="p-4">{children}</div>
);
