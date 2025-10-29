import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rightsteps Quiz - Interactive Learning Platform",
  description: "An engaging educational quiz platform powered by AI and expert teachers. Practice Mathematics and Science with personalized questions for grades 1-5.",
  keywords: "education, quiz, learning, mathematics, science, AI tutor, kids learning, grade 1-5",
  authors: [{ name: "Rightsteps Educational Technology" }],
  creator: "Rightsteps",
  publisher: "Rightsteps Educational Technology",
  openGraph: {
    title: "Rightsteps Quiz - Interactive Learning Platform",
    description: "Practice Mathematics and Science with AI-powered questions and expert teacher content",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rightsteps Quiz - Interactive Learning Platform",
    description: "Practice Mathematics and Science with AI-powered questions and expert teacher content",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
