import { useEffect } from "react";
import { useMatches } from "react-router";

const TitleManager = () => {
  const matches = useMatches();

  useEffect(() => {
    const currentRoute = [...matches]
      .reverse()
      .find(m => m.handle?.title);

    if (!currentRoute) return;

    const title =
      typeof currentRoute.handle.title === "function"
        ? currentRoute.handle.title(currentRoute)
        : currentRoute.handle.title;

    document.title = title;
  }, [matches]);

  return null;
};

export default TitleManager;
