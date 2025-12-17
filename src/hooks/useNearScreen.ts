import { useState, useEffect, useRef } from "react";

export const useNearScreen = (distance: string = "100px") => {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const fromRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = fromRef.current;
    if (!element) return;

    const observerCallback: IntersectionObserverCallback = (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        setIsNearScreen(true);

        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: distance,
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [distance]);

  return { isNearScreen, fromRef };
};
