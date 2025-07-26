import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  style: ["normal", "italic"],
  fallback: ["system-ui", "sans-serif"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Phong Thuy Viet",
  description: "Phong Thuy Viet",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
