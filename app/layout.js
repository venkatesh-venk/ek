import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.esika.in"),
  title: {
    default: "ESIKA INFOTECH — Software, Cloud & Data Engineering",
    template: "%s | ESIKA INFOTECH",
  },
  description:
    "ESIKA INFOTECH PVT LTD is a Bengaluru-based software company building web & mobile apps, cloud platforms, and data/AI solutions for growing businesses.",
  keywords: [
    "ESIKA INFOTECH",
    "software company Bangalore",
    "web development",
    "cloud",
    "DevOps",
    "data engineering",
    "AI",
  ],
  openGraph: {
    title: "ESIKA INFOTECH — Software, Cloud & Data Engineering",
    description:
      "Bengaluru-based software company building modern web, cloud and data products.",
    url: "https://www.esika.in",
    siteName: "ESIKA INFOTECH",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#0b2440",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
