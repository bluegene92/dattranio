import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dat Tran",
  description: "Portfolio & Blog",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <div className="gradient-bg"></div>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
