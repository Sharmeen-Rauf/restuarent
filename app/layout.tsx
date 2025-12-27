import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/lib/context/CartContext";
import { LocationProvider } from "@/lib/context/LocationContext";
import AOSInit from "@/components/AOSInit";

export const metadata: Metadata = {
  title: "GoldenApple | Fast, Fresh, and Flavorful!",
  description: "Order delicious food online from GoldenApple",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/brands.min.css"
        />
      </head>
      <body>
        <AOSInit />
        <LocationProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </LocationProvider>
      </body>
    </html>
  );
}
