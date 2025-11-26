import React from "react";

interface BannerProps {
  message: string | (() => React.ReactNode);
  backgroundColor?: string;
  textColor?: string;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({
  message,
  backgroundColor,
  textColor = "#F9FAFB",
  className = "",
}) => {
  return (
    <div
      className={`w-full py-3 px-4 text-center font-extralight font-stretch-semi-expanded text-base shadow-lg relative z-10 ${className}`}
      style={{
        background:
          backgroundColor ||
          "linear-gradient(90deg, orange 0%, #ffffff10 60%, #77f705 100%)",
        color: textColor,
      }}
      role="alert"
    >
      {typeof message === "function" ? message() : message}
    </div>
  );
};

export default Banner;
