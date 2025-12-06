"use client";

import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /iphone|android|ipad|mobile/.test(ua);

    if (isMobile) return;

    const snow = document.createElement("script");
    snow.src = "https://app.embed.im/snow.js";
    document.body.appendChild(snow);

    const sparkles = document.createElement("script");
    sparkles.src = "https://app.embed.im/sparkles.js";
    document.body.appendChild(sparkles);

    return () => {
      snow.remove();
      sparkles.remove();
    };
  }, []);

  return null;
}
