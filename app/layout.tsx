import Link from "next/link";
import "./globals.css";
import { Nunito } from "@next/font/google";

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="max-w-screen-md m-auto">
        <main>
          <h1 className="text-3xl font-bold">
            <Link href="/">Dog breeds</Link>
          </h1>
          <nav>
            <ul className="flex gap-5">
              <li>
                <Link href="/affenpinscher">affenpinscher</Link>
              </li>
              <li>
                <Link href="/african">african</Link>
              </li>
              <li>
                <Link href="/airedale">airedale</Link>
              </li>
            </ul>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
