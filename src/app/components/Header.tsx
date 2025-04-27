"use client";

import useDarkMode from '@/lib/useDarkMode';

export default function Header() {
  const [theme, setTheme] = useDarkMode();

  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold">Fusion Fabrics</h1>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-md bg-secondary text-white"
      >
        Toggle {theme === 'dark' ? 'Light' : 'Dark'}
      </button>
    </header>
  );
}
