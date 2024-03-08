import { useEffect, useState } from "react";
import { Users } from "./users";
import "./App.css";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["heading", "location", "img"];

  const Search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  useEffect(() => {
  }, [query]);

  return (
    <div className="app">
      <input
        className="search"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <Table data={Search(Users)} />
    </div>
  );
}

export default App;
