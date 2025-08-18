import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import localFont from "next/font/local";
import "./globals.css";
import { Quicksand } from "next/font/google"

const robotoCondensed = localFont({
  src: "./fonts/RobotoCondensed-Regular.ttf",
  variable: "--font-roboto-condensed",
  weight: "400 700",
});

const quickSand = Quicksand({
  variable: "--font-quicksand",
  weight: "300",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoCondensed.variable} ${quickSand.variable}`}>
        <Theme appearance="dark">
          {children}
        </Theme>
      </body>
    </html>
  );
}
