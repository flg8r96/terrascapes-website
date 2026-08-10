import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TerraScapes Landscaping | Las Vegas Desert Landscape Design",
  description: "Luxury desert landscaping, hardscaping, outdoor living, xeriscape, irrigation, and maintenance in Las Vegas, Henderson, and Summerlin.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
