import "./globals.css";
import { Inter, Fraunces } from "next/font/google";
import { Header, Footer } from "../components/Site";

const sans = Inter({ subsets: ["latin"], variable: "--sans" });
const serif = Fraunces({ subsets: ["latin"], variable: "--serif" });
export const metadata={title:"Tomas Avaro Acosta | On-Board Courier & Time-Critical Logistics",description:"Professional OBC and hand-carry services for urgent international shipments."};
export default function Root({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body><Header />{children}<Footer /></body>
    </html>
  );
}
