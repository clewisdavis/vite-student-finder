import React from 'react';
import { Input } from '@/components/ui/input';
import { Filter } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-background-light dark:bg-background-dark py-5 px-4 text-text-primary-light dark:text-text-primary-dark border border-border-light dark:border-border-dark">
      <div className="flex items-center justify-center">
        <Input
          type="text"
          placeholder="Search for a student..."
          className="w-3/5 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Filter className="ml-4 w-6 h-6 text-gray-600" />
      </div>
    </header>
  );
}
