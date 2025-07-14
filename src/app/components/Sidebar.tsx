"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Analyze', href: '/analyze' },
    { name: 'Design', href: '/design' },
    { name: 'Library', href: '/library' },
  ];

  return (
    <aside className="w-64 p-4 bg-card dark:bg-card-dark h-screen hidden md:block bg-blue-700 text-white p-4">
      <nav className="flex flex-col gap-4">
        {navItems.map(item => (
          <Link key={item.name} href={item.href}>
            <span className={`hover: bg-blue-800 block p-2 rounded-lg ${pathname === item.href ? 'bg-primary text-white' : 'hover:bg-secondary hover:text-white hover'}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
