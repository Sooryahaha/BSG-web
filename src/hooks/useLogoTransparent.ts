import { useEffect, useState } from 'react';

/**
 * Converts black/dark pixels in a PNG to transparent (for logo on dark background).
 * Returns a data URL or the original src on error.
 */
export function useLogoTransparent(src: string, threshold = 45): string | null {
  const [dataUrl, setDataUrl] = useState<string | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = '';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          setDataUrl(src);
          return;
        }
        ctx.drawImage(img, 0, 0);
        const id = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const d = id.data;
        for (let i = 0; i < d.length; i += 4) {
          const r = d[i];
          const g = d[i + 1];
          const b = d[i + 2];
          if (r <= threshold && g <= threshold && b <= threshold) {
            d[i + 3] = 0;
          }
        }
        ctx.putImageData(id, 0, 0);
        setDataUrl(canvas.toDataURL('image/png'));
      } catch {
        setDataUrl(src);
      }
    };
    img.onerror = () => setDataUrl(src);
    img.src = src;
  }, [src, threshold]);

  return dataUrl;
}
