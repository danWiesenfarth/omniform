import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import classes from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem('theme') === 'light';
  });

  useEffect(() => {
    const theme = isLight ? 'light' : 'dark';

    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [isLight]);

  return (
    <button
      className={classes['theme-toggle']}
      onClick={() => setIsLight((prev) => !prev)}
    >
      {isLight ? <Moon /> : <Sun />}
    </button>
  );
}
