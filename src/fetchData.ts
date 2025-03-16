import axios from "axios";
import { UnsplashResponse } from "./Api.types";

axios.defaults.baseURL = "https://api.unsplash.com";

const apiKey: string = "A6YwQZBk-Nx-N_Oj5U-HFIL3IUs6SBfjN3aBZH9Uins";

export const fetchImagesUsingWord = async (
  word: string,
  page: number
): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>("/search/photos", {
    headers: { Authorization: `Client-ID ${apiKey}` },
    params: {
      query: word,
      per_page: 12,
      page: page,
    },
  });

  return data;
};
