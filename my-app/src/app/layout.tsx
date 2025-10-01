import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "10X Growth Club",
  description: "10X Growth Club",
  icons: {
    icon: "/logo1.svg",         // default
    shortcut: "/logo1.svg", // optional
    apple: "/logo1.svg", // optional
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
