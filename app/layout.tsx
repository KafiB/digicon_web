import type { Metadata } from "next";
import { Poppins } from "next/font/google"
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar"
import { Footer } from "@/components/ui/Footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Digicon",
  description: "BPO Call Centre Solutions",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Navbar />
        <main className="pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}