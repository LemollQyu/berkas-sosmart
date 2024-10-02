import React, { ReactNode } from "react";

interface LayoutUtamaProps {
  children: ReactNode;
}

const LayoutUtama: React.FC<LayoutUtamaProps> = ({ children }) => {
  return (
    <div className="max-w-[500px] mx-auto border border-green-800">
      {children}
    </div>
  );
};

export default LayoutUtama;
