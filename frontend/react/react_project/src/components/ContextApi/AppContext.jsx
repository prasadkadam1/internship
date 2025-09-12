import React, { useState } from "react";
import { createContext } from "react";
export let context = createContext();
const AppContext = (props) => {
  let [state, setState] = useState(0);
  return (
    <context.Provider value={{ state, setState }}>
      {props.children}
    </context.Provider>
  );
};

export default AppContext;




// Create a context that stores a theme (light or dark) and display it inside a component.

// Use useContext to access the theme value in multiple child components.

// Toggle the theme (light ↔ dark) using a button in one component and reflect the change everywhere.

// Create a context for a user’s name and display it in a header, sidebar, and footer.

// Update the user’s name through an input field in one component and show the updated name in others.