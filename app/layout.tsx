import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: { default:"Eugeglass | Vidrio y aluminio en Santiago", template:"%s | Eugeglass" }, description:"Soluciones arquitectónicas en vidrio y aluminio para Santiago.", metadataBase:new URL("https://eugeglass.cl") };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="es"><body>{children}</body></html>; }
