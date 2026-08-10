import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
import { CartProvider } from "@/context/CartContext";

export const metadata: Metadata = {
  title: "CamRay's Prodigious Pomade | Organic Hair, Skin & Lip Care",
  description: "Handcrafted organic pomade made from oils, butters & herbs using a grandmother's recipe. Natural hair, scalp, skin, and lip care products.",
  keywords: "organic pomade, natural hair care, handmade skincare, lip balm, scalp treatment, organic collection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <SiteChrome>{children}</SiteChrome>
        </CartProvider>
      </body>
    </html>
  );
}
