// Project types
export enum ProjectCategory {
  WEB_DEVELOPMENT = 'web-development',
  MOBILE_APP = 'mobile-app',
  GAME_DEVELOPMENT = 'game-development',
  DATA_VISUALIZATION = 'data-visualization',
  MACHINE_LEARNING = 'machine-learning',
  OTHER = 'other'
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  thumbnailUrl: string;
  images: string[];
  technologies: string[];
  category: ProjectCategory;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  completionDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

// Art types
export enum ArtType {
  BOOK = 'book',
  MOVIE = 'movie',
  SERIES = 'series',
  GAME = 'game',
  PODCAST = 'podcast',
  MUSIC = 'music',
  PAINTING = 'painting',
  POEM = 'poem',
  OTHER = 'other'
}

export interface ArtItem {
  id: string;
  slug: string;
  title: string;
  type: ArtType;
  coverUrl: string;
  description: string;
  content: string;
  rating: number;
  tags: string[];
  releaseDate?: Date;
  author?: string;
  externalUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Killer Sudoku Helper types
export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
  EXPERT = 'expert'
}

export type Note = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface Cage {
  id: string;
  cells: [number, number][];
  sum: number;
  color: string;
}

export interface KillerSudokuGame {
  id: string;
  difficulty: Difficulty;
  board: number[][];
  cages: Cage[];
  notes: Note[][][];
  startTime: Date;
  endTime?: Date;
  hintsUsed: number;
  isCustom: boolean;
  isSolved: boolean;
}

// Crypto Analyzer types
export interface CryptoAsset {
  coinId: string;
  symbol: string;
  amount: number;
  purchasePrice: number;
  purchaseDate: Date;
}

export interface CryptoPortfolio {
  id: string;
  name: string;
  assets: CryptoAsset[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PriceAlert {
  id: string;
  coinId: string;
  targetPrice: number;
  direction: 'above' | 'below';
  isActive: boolean;
  createdAt: Date;
}

// Contact form type
export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
} 