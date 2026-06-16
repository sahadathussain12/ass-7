"use client";
import { createContext, useState } from "react";

export const FriendsContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);
 
  const value = {
    timeline,
    setTimeline,
  };

  return (
    <div>
      <FriendsContext.Provider  value={value}>
        {children}
      </FriendsContext.Provider>
    </div>
  );
};

export default ContextProvider;
