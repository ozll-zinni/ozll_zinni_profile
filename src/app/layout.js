import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "ozll_zinni portfolio",
  description: "Portfolio of ozll_zinni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
         <Navbar />
        {children}
      </body>
    </html>
  );
}
