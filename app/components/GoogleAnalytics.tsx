"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"

// Google Analytics Measurement ID for LearnDinosaurs
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-7RPSCX2GPW"

function GoogleAnalyticsInner() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")

    // Track page view on route change
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("config", GA_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsInner />
      </Suspense>
    </>
  )
}

