"use client";

import Script from "next/script";
import React from "react";

const page = () => {
  const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS;
  console.log(googleAnalyticsId);
  return (
    <div>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="ga-script" strategy="lazyOnload">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
      page_path: window.location.pathname,
    });
        `}
      </Script>
    </div>
  );
};

export default page;
