import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  technologies: string[];
  category: string;
  featured: boolean;
}

export default function ProjectCard({
  slug,
  title,
  description,
  thumbnailUrl,
  technologies,
  category,
  featured,
}: ProjectCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image
          src={thumbnailUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        {featured && (
          <span className="inline-block bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full mb-2">
            Öne Çıkan
          </span>
        )}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 3 && (
            <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
              +{technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{category}</span>
          <Link
            href={`/projects/${slug}`}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Detayları Gör
          </Link>
        </div>
      </div>
    </div>
  );
} 