import "./globals.css";
import { CartProvider } from "../components/CartProvider";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Infinidairy | Pure. Fresh. Natural.",
  description: "Infinidairy 2% low-fat milk — pure, fresh and made for everyday family goodness.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
