import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import useData from "./useData";
import { Genre } from "./useGenres";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        genre: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder,
        search: gameQuery?.searchText,
      },
    },
    [gameQuery]
  );
export default useGames;
