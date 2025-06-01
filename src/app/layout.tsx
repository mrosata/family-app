import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rosata Panchanan Family",
  description: "A place to share and celebrate our family moments, event invites, photos, and more!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-adaptive-gray-50`}>
        <nav className="bg-white dark:bg-gray-900 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link href="/" className="text-xl font-semibold text-adaptive-gray-900">
                Our Family
              </Link>
              <div className="flex space-x-4">
                <Link href="/" className="text-adaptive-gray-600 hover:text-adaptive-gray-900">Home</Link>
                <Link href="/events" className="text-adaptive-gray-600 hover:text-adaptive-gray-900">Events</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-900 border-t mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-adaptive-gray-500">© {new Date().getFullYear()} Our Family. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
