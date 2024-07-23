import { Revalia } from "next/font/google";
import "./globals.css";
import Nav from './components/Nav'



const font = Revalia({weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Luchador Movie Review",
  description: "Oh you Know",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      
      <body>
        <Nav/>
        {children}
        </body>
    </html>
  );
}
