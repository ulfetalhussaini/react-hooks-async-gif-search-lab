import React, { useEffect, useState } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

export default function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("dolphin");

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=CJKhrTzUUl0hjxnq50ml54cLqSS4jgPm&limit=3`
    )
      .then((r) => r.json())
      .then(({ data }) => {
        const gifs = data.map((gif) => ({ url: gif.images.original.url }));
        setGifs(gifs);
      });
  }, [query]);

  return (
    <div style={{ display: "flex" }}>
      <GifList gifs={gifs} />
      <GifSearch onSubmitQuery={setQuery} />
    </div>
  );
}