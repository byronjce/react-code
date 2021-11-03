import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import Loader from "./Loader";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = (data) => {
    //Agrgar a la avriable search el artista y cancion enviada desde el form
    setSearch(data);
  };

  useEffect(() => {
    if (search === null) return;
    const fetchData = async () => {
      //Obtenienedo el artista y cancion en 2 variables desde la varibale search
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(artistUrl, "+ ", songUrl);
      setLoading(true);

      //Obteneiendo data de artista y cancion
      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      console.log(artistRes, "+ ", songRes);
      setLoading(false);
      setBio(artistRes);
      setLyric(songRes);
    };
    fetchData();
  }, [search]);

  return (
    <div>
      <h2>Song Search</h2>
      <article className="grid-1-3">
        {loading && <Loader />}
        <SongForm handleSearch={handleSearch} />
        <SongDetails search={search} lyric={lyric} bio={bio} />
      </article>
    </div>
  );
};

export default SongSearch;
