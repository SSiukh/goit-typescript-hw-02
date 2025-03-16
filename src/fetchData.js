import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

const apiKey = import.meta.env.VITE_SPLASH_KEY;

export const fetchImagesUsingWord = async (word, page) => {
  const response = await axios.get("/search/photos", {
    headers: { Authorization: `Client-ID ${apiKey}` },
    params: {
      query: word,
      per_page: 12,
      page: page,
    },
  });

  return response.data;
};
