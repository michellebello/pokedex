import React, { useState } from "react";
import FrontPokedex from "./FrontPokedex";
import SearchBar from "./SearchBar";

function PokedexContainer() {
  const [openPokedex, setOpenPokedex] = useState(false);

  return (
    <div>
      {openPokedex ? (
        <SearchBar />
      ) : (
        <FrontPokedex openPokedex={() => setOpenPokedex(true)} />
      )}
    </div>
  );
}

export default PokedexContainer;
