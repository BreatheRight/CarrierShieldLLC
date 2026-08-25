import React, { useState } from "react";

interface FleetIntegraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  variant?: "horizontal" | "vertical";
}

export default function FleetIntegraLogo({
  className = "",
  size = "md",
  showTagline = true,
  variant = "horizontal",
}: FleetIntegraLogoProps) {
  const [imgSrc, setImgSrc] = useState("/fleet-integra-graphic.png");

  // Sizing mappings for graphic icon and executive typography
  const config = {
    sm: {
      img: "h-9 w-9",
      title: "text-lg sm:text-xl",
      tagline: "text-[9.5px] sm:text-[10px]",
      gap: "gap-2.5",
    },
    md: {
      img: "h-11 w-11 sm:h-13 sm:w-13",
      title: "text-xl sm:text-2xl",
      tagline: "text-[10.5px] sm:text-[12px]",
      gap: "gap-3 sm:gap-3.5",
    },
    lg: {
      img: "h-16 w-16 sm:h-20 sm:w-20",
      title: "text-2xl sm:text-3xl",
      tagline: "text-xs sm:text-sm",
      gap: "gap-4 sm:gap-4.5",
    },
    xl: {
      img: "h-20 w-20 sm:h-24 sm:w-24",
      title: "text-3xl sm:text-4xl",
      tagline: "text-sm sm:text-base",
      gap: "gap-5",
    },
  };

  const current = config[size] || config.md;

  const handleImageError = () => {
    if (imgSrc === "/fleet-integra-graphic.png") {
      setImgSrc("/fleet-integra-graphic.jpg");
    } else if (imgSrc === "/fleet-integra-graphic.jpg") {
      setImgSrc("/fleet-integra-logo.jpg");
    }
  };

  return (
    <div
      className={`inline-flex items-center ${
        variant === "vertical" ? "flex-col text-center" : "flex-row text-left"
      } ${current.gap} group ${className}`}
    >
      {/* Isolated Graphic Emblem (Truck silhouette, FI blue letters, and abstract background shape - text removed) */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <img
          src={imgSrc}
          alt="Fleet Integra Emblem"
          onError={handleImageError}
          className={`${current.img} object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_2px_10px_rgba(56,189,248,0.25)]`}
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>

      {/* Pronounced Executive Brand Typography */}
      <div className="flex flex-col justify-center select-none">
        <div
          className={`font-extrabold text-white tracking-tight leading-none transition-colors duration-200 group-hover:text-sky-200 ${current.title}`}
          style={{ letterSpacing: "-0.025em" }}
        >
          Fleet Integra
        </div>
        {showTagline && (
          <div
            className={`font-semibold text-sky-400/90 leading-tight mt-1 transition-colors duration-200 group-hover:text-sky-300 ${current.tagline}`}
            style={{ letterSpacing: "0.01em" }}
          >
            Safety. Compliance. Risk Management.
          </div>
        )}
      </div>
    </div>
  );
}
