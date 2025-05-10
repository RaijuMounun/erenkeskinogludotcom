'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UIContext } from '../../app/providers';

interface MobileMenuProps {
  navigationItems: Array<{
    name: string;
    href: string;
  }>;
}

export default function MobileMenu({ navigationItems }: MobileMenuProps) {
  const pathname = usePathname();
  const { setIsMobileMenuOpen } = React.useContext(UIContext);
  
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
      <div className="px-2 pt-2 pb-3 space-y-1">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={handleLinkClick}
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              pathname === item.href
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200'
                : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
} 