import {Inter} from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import {AuthContextProvider} from "@/context/AuthContext";
import Providers from "@/app/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gameify Life",
  description: "Turn your day into a game",
};

export default function RootLayout({ children }) {
  return (

    <Providers>
        <AuthContextProvider>
            <html lang="en">
            <body>
            <NavBar />
            {children}</body>
            </html>
        </AuthContextProvider>
    </Providers>
  );
}
