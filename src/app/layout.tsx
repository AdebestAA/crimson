import type { Metadata } from "next";
import QueryProvider from "@/components/providers/QueryProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crimson",
  description: "Premium event planning services",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/crimson-logo.png", type: "image/png" },
    ],
    apple: "/assets/crimson-logo.png",
  },
  openGraph: {
    title: "Crimson Events",
    description: `Premium event planning services`,
    url: "https://www.crimsonevents.ng/",
    images: [
      {
        url: "https://res.cloudinary.com/dojnilu5l/image/upload/v1784998391/crimson-logo_zwiwi0.png",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-dm-sans">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
