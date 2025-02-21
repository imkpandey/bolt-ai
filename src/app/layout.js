import "./globals.css";
import Scene from "@/components/ui/Scene";

export const metadata = {
  title: "Bolt AI",
  description:
    "An AI-based user-friendly tool for creating beautiful websites at super fast speed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
