import axios from "axios";


export const getImages = async ( searchWord = "landscape", next_page ) =>
  await axios.get(
    next_page
      ? next_page
      : `https://api.pexels.com/v1/search?query=${searchWord}`,
    {
      headers: {
        Authorization:
          process.env.AUTH,
      },
    }
  );
