import "./globals.css";
import React from 'react';

export const metadata = {
  title: "DHG Soft | It's Time to Connect Intelligence",
  description: "DHG Soft empowers global enterprises with sophisticated digital transformation tools, turning raw operational data into actionable strategic intelligence.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Material Icons */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        {/* Google Fonts: Hanken Grotesk and Inter */}
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Inter:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
