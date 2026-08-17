import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://www.esika.in"),
  title: {
    default: "ESIKA INFOTECH — IT Consulting for Banking & Aviation",
    template: "%s | ESIKA INFOTECH",
  },
  description:
    "ESIKA INFOTECH provides enterprise IT consulting for banks and airlines — core banking modernization, aviation systems, cloud migration, data analytics, and managed services.",
  keywords: [
    "ESIKA INFOTECH",
    "banking IT consulting",
    "aviation IT consulting",
    "core banking modernization",
    "airline systems integration",
    "cloud migration banking",
    "managed services",
  ],
  openGraph: {
    title: "ESIKA INFOTECH — IT Consulting for Banking & Aviation",
    description:
      "Enterprise IT consulting for banks and airlines — from core systems to cloud and managed operations.",
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
