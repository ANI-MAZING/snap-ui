import React from "react";

export const SoftGradient: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {/* Main gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.75), rgba(45,212,191,0.85))",
        }}
      />

      {/* Subtle radial highlight */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25), transparent 40%)",
        }}
      />

      {/* Noise layer */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"100\"><rect width=\"100%\" height=\"100%\" fill=\"black\" opacity=\"0.3\"/></svg>')",
        }}
      />
    </div>
  );
};
