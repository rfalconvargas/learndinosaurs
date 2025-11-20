import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "./providers"
import GoogleAnalytics from "./components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LearnDinosaurs - Explore the Prehistoric World",
  description: "Interactive app to explore dinosaurs like a real paleontologist",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleAnalytics />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


