"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function Home() {
  useEffect(() => {
    window.location.replace("/NovaBanque/prestige/");
  }, []);

  return (
    <>
      {/* Inline meta refresh for instant redirect even before JS */}
      <Script id="redirect-instant" strategy="beforeInteractive">
        {`window.location.replace("/NovaBanque/prestige/");`}
      </Script>
      <div
        style={{
          background: "#06070A",
          color: "#F4F4F8",
          margin: 0,
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
          fontSize: 13,
          letterSpacing: "0.05em",
          zIndex: 9999,
        }}
      >
        <noscript>
          <meta httpEquiv="refresh" content="0;url=/NovaBanque/prestige/" />
          <a href="/NovaBanque/prestige/" style={{ color: "#5B47FF" }}>
            Entrer dans NovaBanque →
          </a>
        </noscript>
        <p style={{ opacity: 0.7 }}>
          Redirection vers{" "}
          <a href="/NovaBanque/prestige/" style={{ color: "#5B47FF", textDecoration: "underline" }}>
            NovaBanque
          </a>
          ...
        </p>
      </div>
    </>
  );
}
