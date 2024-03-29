import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navigation";
import Footer from "@/components/footer";
import styles from "./Layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.mainLayout}>
          <Navbar />
          <div className={styles.children}>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
