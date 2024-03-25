import "./globals.css";

export const metadata = {
  title: "Ankesh Gupta",
  description: "Portfolio of Ankesh Gupta",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
