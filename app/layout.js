import NavBar from "./components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["greek"],
  display: "swap",
  weight: ["500", "700", "900"],
});

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="main">
          <div className="gradient" />
        </div>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
