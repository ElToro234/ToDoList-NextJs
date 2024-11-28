import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simple To-Do-List",
  description: "Simple to do list app on NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
      <body> 
        { children }
        </body>
    </html>
  );
}
