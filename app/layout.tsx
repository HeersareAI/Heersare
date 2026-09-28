import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Heersare Designer | Full-Stack Web Engineer",
  description: "Clear ideas. Thoughtful engineering. Heersare Designer builds AI systems, full-stack applications, RAG experiences, and WordPress platforms.",
  metadataBase: new URL(process.env.SITE_URL || "https://heersare-designer-portfolio.heersareai210747.chatgpt.site"),
  icons: { icon: "/heersare-logo-transparent.png", apple: "/heersare-logo-transparent.png" },
  openGraph: { title: "Heersare Designer", description: "Build the right product for your next big idea.", type: "website", images: [{ url: "/og.png", width: 1733, height: 907, alt: "Heersare Designer — Build the right product for your next big idea." }] },
  twitter: { card: "summary_large_image", title: "Heersare Designer", description: "Build the right product for your next big idea.", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning>
    <head>
      <script id="theme-init" dangerouslySetInnerHTML={{ __html: `(function(){var theme;try{theme=localStorage.getItem('heersare-theme')}catch(e){}var dark=theme==='dark'||(theme!=='light'&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',dark)})();` }} />
    </head>
    <body>{children}</body>
  </html>;
}
