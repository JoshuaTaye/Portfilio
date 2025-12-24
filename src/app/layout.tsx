import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import Magnita from 'next/font/local'
import {NextIntlClientProvider} from "next-intl";
import {getMessages} from "next-intl/server";

const magnita = Magnita({
  src: [
    {
      path: './fonts/Magnita.woff'
    }
  ],
  variable: '--font-magnita'
})
export const metadata: Metadata = {
  title: "Joshua Taye",
  description: "Portfolio Website",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({
                                       children,
                                     }: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  return (
    <html lang="en" className={`${magnita.variable}`}>
    <body>
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
    </body>
    </html>
  );
}
