import { useState, useEffect } from 'react';

export default function useWindowDimension() {
  const [hasWindow, setHasWindow] = useState(typeof window !== 'undefined');

  useEffect(() => {
    setHasWindow(typeof window !== 'undefined');
  }, []);

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}