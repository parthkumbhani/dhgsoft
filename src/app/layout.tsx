import "./globals.css";
import React from 'react';

export const metadata = {
  title: "DHGsoft | It's Time to Connect Intelligence",
  description: "DHGsoft empowers global enterprises with sophisticated digital transformation tools, turning raw operational data into actionable strategic intelligence.",
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
        {/* Google Fonts: Hanken Grotesk, Inter, Great Vibes, and Dancing Script */}
        <link
          href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:ital,wght@0,100..900;1,100..900&family=Inter:ital,wght@0,100..900;1,100..900&family=Dancing+Script:wght@400..700&family=Great+Vibes&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-surface font-body-md overflow-x-hidden min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
