import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This forces the browser to scroll to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This effect runs every time the path changes

  return null; // This component doesn't render anything visually
}