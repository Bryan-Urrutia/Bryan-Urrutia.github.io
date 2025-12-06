"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function Effects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const mobile = /iphone|android|ipad|mobile/.test(ua);
    setIsMobile(mobile);
  }, []);

  if (isMobile) return null;

  return (
    <>
      <Script src="https://app.embed.im/snow.js" strategy="afterInteractive" />
      <Script src="https://app.embed.im/sparkles.js" strategy="afterInteractive" />
    </>
  );
}
