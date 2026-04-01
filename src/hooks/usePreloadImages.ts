import { useEffect, useState } from 'react';

/**
 * Preloads a list of image URLs. Returns true when all have loaded or failed.
 */
export function usePreloadImages(urls: string[]): boolean {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (urls.length === 0) {
      setLoaded(true);
      return;
    }
    const loadImage = (url: string) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    Promise.all(urls.map(loadImage)).then(() => setLoaded(true));
  }, [urls.join(',')]);

  return loaded;
}
