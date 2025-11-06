import React, { createContext, useState } from "react";

export const BookmarksContext = createContext({
  ids: [],
  addBookmark: (id) => {},
  removeBookmark: (id) => {},
  isBookmarked: (id) => false,
});

export default function BookmarksContextProvider({ children }) {
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  function addBookmark(id) {
    setBookmarkedIds((currentIds) => {
      if (currentIds.includes(id)) return currentIds;
      return [...currentIds, id];
    });
  }

  function removeBookmark(id) {
    setBookmarkedIds((currentIds) => {
      return currentIds.filter((cid) => cid !== id);
    });
  }

  function isBookmarked(id) {
    return bookmarkedIds.includes(id);
  }

  const value = {
    ids: bookmarkedIds,
    addBookmark,
    removeBookmark,
    isBookmarked,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}
