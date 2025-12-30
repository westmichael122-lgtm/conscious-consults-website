import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";
import { Toaster as SonnerToaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conscious Consults & Construction LLC",
  description: "Where consciousness meets structure. Building spaces that breathe with intention through conscious construction practices.",
  keywords: ["Conscious Construction", "Sustainable Building", "Architectural Consultation"],
  authors: [{ name: "Conscious Consults & Construction" }],
  openGraph: {
    title: "Conscious Consults & Construction LLC",
    description: "Where consciousness meets structure. Building spaces that breathe with intention.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Conscious Consults & Construction LLC",
    description: "Where consciousness meets structure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <SonnerToaster
            position="bottom-center"
            toastOptions={{
              style: {
                background: 'var(--background)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
              }
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
