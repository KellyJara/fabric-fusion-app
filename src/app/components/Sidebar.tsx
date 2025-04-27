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
    <aside className="w-64 p-4 bg-card dark:bg-card-dark h-screen hidden md:block">
      <nav className="flex flex-col gap-4">
        {navItems.map(item => (
          <Link key={item.name} href={item.href}>
            <span className={`block p-2 rounded-lg ${pathname === item.href ? 'bg-primary text-white' : 'hover:bg-secondary hover:text-white'}`}>
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
