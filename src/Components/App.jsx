import React from "react";

import ItemList from "./ItemList";
import Cart from "./Cart";

const App = () => {
  return (
    <div className="ui grid">
      <div className="row">
        <div className="eight wide column">
          <ItemList />
        </div>
        <div className="eight wide column">
          <Cart />
        </div>
      </div>
    </div>
  );
};

export default App;
