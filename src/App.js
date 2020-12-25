import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/ui/Header";
import CharacterGrid from "./components/characters/CharacterGrid";
import Search from "./components/ui/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`
        );

        // console.log(result.data);
        setItems(result.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, [query]);

  return (
    <div className="Container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
