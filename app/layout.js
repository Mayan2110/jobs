import localFont from "next/font/local";
import "./globals.css";
import FooterComponent from "./component/common/footerComponent";
import HeaderComponent from "./component/common/headerComponent";
import { ToastContainer } from "react-toastify";
import { ContextProvider } from "./context/contextprovider"
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ContextProvider >
          <HeaderComponent />
          {children}
          <FooterComponent />
          <ToastContainer />
        </ContextProvider>

      </body>
    </html>
  );
}
