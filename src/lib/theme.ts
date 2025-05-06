import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light'
  );

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove(
      theme === 'dark' ? 'light' : 'dark'
    );
    root.classList.add(theme);

    const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () =>
      mediaQuery.removeEventListener(
        'change',
        handleChange
      );
  }, [theme]);

  return { theme, setTheme };
}
