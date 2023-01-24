"use client";
import Link from "next/link";
import "./globals.css";
import { Nunito } from "@next/font/google";
import Image from "next/image";
import FavouritableImage from "../components/favImages";
import { useFavorites } from "../state/favorite";

const nunito = Nunito({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface Props {
  children: React.ReactNode;
}

const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    search: { value: string };
  };
  const breed = target.search.value;
  if (breed) {
    window.location.href = `/${breed.split(" ").join("")}`;
  }
};

export default function RootLayout({ children }: Props) {
  const favorites = useFavorites((state) => state.favorites);

  return (
    <html lang="en" className={nunito.className}>
      <body className="max-w-screen-md m-auto">
        <main>
          <h1 className="text-2xl font-bold mt-10">
            <Link href="/">Dog breeds</Link>
          </h1>
          <nav>
            <form className="flex rounded-md my-4" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Affenpinscher"
                name="search"
                className="bg-lightGray py-1 px-4 w-full text rounded-l-md"
              />
              <button className="bg-lightBlue text-white px-6 rounded-md flex flex-row justify-center items-center px-2 h-9">
                <Image
                  src="./search.svg"
                  alt="Search"
                  width={20}
                  height={20}
                  className="mx-2"
                />
                <p className="text-sm mr-2">Search</p>
              </button>
            </form>
          </nav>
          <article>{children}</article>
          <hr />
          <article>
            <h1 className="text-2xl font-bold mt-10">Favourites</h1>

            <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-6">
              {favorites.length === 0 ? (
                <p className="text-gray-500">No favourites yet</p>
              ) : (
                favorites.map((favorite) => (
                  <FavouritableImage src={favorite} key={favorite} />
                ))
              )}
            </div>
          </article>
        </main>
      </body>
    </html>
  );
}
