import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: "MAYERETECH | Abdulhadi Ahmad",
  description: "Portfolio of Abdulhadi Ahmad - Front-End Developer and Web Designer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}