"use client";

import { MovieDetails } from "@/types";
import { Star } from "lucide-react";

export const MovieCard = ({ movie }: { movie: MovieDetails }) => {
  const { popularity } = movie;

  return (
    <div className="overflow-hidden rounded-lg shadow-md w-60">
      <img src="dearSanta.jpg" alt="Dear Santa" className="w-full h-auto" />

      <div className="px-4 py-3 bg-gray-100">
        <p className="flex items-center text-sm">
          <Star />
          <span className="font-semibold">{popularity}</span>
          <span className="ml-1 text-gray-500">/10</span>
        </p>
        <h2 className="mt-1 font-medium text-md"></h2>
      </div>
    </div>
  );
};
