"use client";

import Image from "next/image";
import { useFavorites } from "../state/favorite";

const FavouritableImage = ({ src }: { src: string }) => {
  const favorites = useFavorites((state) => state.favorites);
  const toggleFavorite = useFavorites((state) => state.toggleFavorite);
  const isFavorite = favorites.includes(src);

  return (
    <div className="relative">
      <img
        src={src}
        alt="dog"
        className="w-full h-64 object-cover rounded-md"
      />
      <button
        className="absolute bottom-2 right-3 rounded-full"
        onClick={() => toggleFavorite(src)}
      >
        {isFavorite ? (
          <Image
            src="./fullHeart.svg"
            alt="Search"
            width={25}
            height={25}
            className=""
          />
        ) : (
          <Image
            src="./emptyHeart.svg"
            alt="empty heart"
            width={25}
            height={25}
            className=""
          />
        )}
      </button>
    </div>
  );
};

export default FavouritableImage;
