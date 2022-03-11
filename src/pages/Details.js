import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Details() {
  const [characters, setCharacters] = useState();
  const params = useParams();
  const getCharacters = async () => {
    const response = await axios.get(
      `https://hp-assessment-api.herokuapp.com/hp/character/${params.id}`
    );
    setCharacters(response.data);
    console.log("OneCharacter", response.id);
  };
  useEffect(() => {
    getCharacters();
    console.log("params", params);
  });

  return (
    <div>
      <h1>Details</h1>
      {!characters ? (
        "Loading"
      ) : (
        <div>
          <h2>ID: {characters.id}</h2>
          <h2>NAME: {characters.name}</h2>
          <h2>BLOOD: {characters.blood}</h2>
          <h2>PATRONUS: {characters.patronus}</h2>
          <h2>SPECIES: {characters.species}</h2>
          <h2>DOB: {characters.born}</h2>
          <h2>QUOTE:" {characters.quote}"</h2>

          <img src={characters.imgUrl} />
        </div>
      )}
    </div>
  );
}
