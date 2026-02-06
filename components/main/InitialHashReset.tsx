"use client";

import { useEffect } from "react";

// Ensures that even if someone opens /#about (or any hash) directly,
// the first load always shows the top (Home / Hero) section.
const InitialHashReset = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.location.hash) {
      // Clear the hash from the URL so refreshes always start at Home
      window.history.replaceState(null, "", "/");
      // Scroll to top instantly on first load
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return null;
};

export default InitialHashReset;

