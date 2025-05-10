'use client';

import React, { useState } from 'react';
import ProjectCard from '../../../components/features/ProjectCard';

// Mock data for projects
const mockProjects = [
  {
    id: '1',
    slug: 'killer-sudoku-helper',
    title: 'Killer Sudoku Helper',
    description: 'Killer Sudoku bulmacalarını çözmenize yardımcı olacak interaktif bir araç.',
    thumbnailUrl: '/projects/killer-sudoku.jpg',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    category: 'web-development',
    featured: true,
  },
  {
    id: '2',
    slug: 'crypto-analyzer',
    title: 'Crypto Analyzer',
    description: 'Kripto para piyasasını analiz etmenize yardımcı olacak interaktif bir araç.',
    thumbnailUrl: '/projects/crypto-analyzer.jpg',
    technologies: ['React', 'Next.js', 'Chart.js', 'API'],
    category: 'web-development',
    featured: true,
  },
  {
    id: '3',
    slug: 'personal-website',
    title: 'Kişisel Web Sitesi',
    description: 'Kişisel web sitesi ve portföy.',
    thumbnailUrl: '/projects/personal-website.jpg',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'],
    category: 'web-development',
    featured: false,
  },
];

// Project categories
const categories = [
  { id: 'all', name: 'Tümü' },
  { id: 'web-development', name: 'Web Geliştirme' },
  { id: 'mobile-app', name: 'Mobil Uygulama' },
  { id: 'game-development', name: 'Oyun Geliştirme' },
  { id: 'data-visualization', name: 'Veri Görselleştirme' },
  { id: 'machine-learning', name: 'Makine Öğrenimi' },
  { id: 'other', name: 'Diğer' },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter projects based on category and search query
  const filteredProjects = mockProjects.filter((project) => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Projeler</h1>
      
      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          {/* Search */}
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="Proje ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
      
      {/* Projects grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">Aramanızla eşleşen proje bulunamadı.</p>
        </div>
      )}
    </div>
  );
} 