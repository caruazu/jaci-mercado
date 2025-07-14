import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { Button } from "@/components/ui/button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="min-h-screen min-w-full bg-slate-500">
      <h1 className="text-4xl text-red-400">Landing Page do marketplace Jaci Mercado</h1>
      <Button variant="secondary">ok</Button>
    </div>
  );
}
