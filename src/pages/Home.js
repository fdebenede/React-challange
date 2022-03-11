import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// function compare_name(a, b) {
//   return a.name.localeCompare(b.name);

export default function Home() {
  const API_URL = "https://hp-assessment-api.herokuapp.com/hp/characters";

  const [characters, setCharacters] = useState([]);


  const getCharacters = async () => {
    const response = await axios.get(API_URL);
    setCharacters(response.data);
    console.log("response", response);
    const character = response.data;
  };
  // console.log("response", response);
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div>
      <h1>homepage</h1>
      {!characters
        ? "Loading..."
        : characters.map((character) => {
            return (
              <div key={character.id}>
                <Link to={`/details/${character.id}`}>
                  <h3>{character.name}</h3>
                </Link>
              </div>
            );
          })}
    </div>
  );
}
