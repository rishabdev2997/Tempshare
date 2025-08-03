import "./globals.css"; // your Tailwind styles
import type { Metadata } from "next";
import ClientWrapper from "@/components/ClientWrapper";

export const metadata: Metadata = {
  title: "TempShare",
  description: "File sharing made simple",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
