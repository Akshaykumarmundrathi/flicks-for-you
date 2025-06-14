import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sword, Smile, Heart, Zap, Rocket,
  Skull, Map, Shield, Ghost, Palette, Film // Added Film icon for unknown
} from "lucide-react";

interface Genre {
  name: string;
  count: number | null; // Allow count to be null or number
}

interface GenreCardProps {
  genre: Genre;
  rank: number;
}

const getGenreIcon = (genreName: string) => {
  const icons = {
    'Action': Sword,
    'Adventure': Map,
    'Animation': Palette,
    "Children's": Smile, // Using Smile for Children's
    'Comedy': Smile,
    'Crime': Shield,
    'Documentary': Film, // Using Film for Documentary
    'Drama': Heart,
    'Fantasy': Rocket, // Using Rocket for Fantasy
    'Film-Noir': Ghost, // Using Ghost for Film-Noir
    'Horror': Skull, // Using Skull for Horror
    'Musical': Palette, // Using Palette for Musical
    'Mystery': Zap, // Using Zap for Mystery
    'Romance': Heart,
    'Sci-Fi': Rocket,
    'Thriller': Zap,
    'War': Sword, // Using Sword for War
    'Western': Map, // Using Map for Western
    'unknown': Film // Using Film for unknown
  };

  const IconComponent = icons[genreName] || Film; // Default to Film icon
  return <IconComponent className="h-6 w-6" />;
};

const getGenreGradient = (genreName: string) => {
  const gradients = {
    'Action': 'from-red-600 to-orange-600',
    'Adventure': 'from-green-500 to-teal-600',
    'Animation': 'from-purple-500 to-pink-500',
    "Children's": 'from-yellow-500 to-orange-500', // Same as Comedy
    'Comedy': 'from-yellow-500 to-orange-500',
    'Crime': 'from-red-800 to-gray-800',
    'Documentary': 'from-gray-500 to-gray-700', // New gradient for Documentary
    'Drama': 'from-blue-600 to-purple-600',
    'Fantasy': 'from-indigo-500 to-purple-600', // New gradient for Fantasy
    'Film-Noir': 'from-gray-900 to-black', // New gradient for Film-Noir
    'Horror': 'from-purple-900 to-gray-900',
    'Musical': 'from-pink-400 to-purple-400', // New gradient for Musical
    'Mystery': 'from-teal-600 to-blue-600', // New gradient for Mystery
    'Romance': 'from-pink-500 to-rose-500',
    'Sci-Fi': 'from-cyan-500 to-blue-600',
    'Thriller': 'from-gray-700 to-gray-900',
    'War': 'from-red-900 to-orange-900', // New gradient for War
    'Western': 'from-yellow-800 to-orange-800', // New gradient for Western
     'unknown': 'from-gray-400 to-gray-600' // New gradient for unknown
  };

  return gradients[genreName] || 'from-purple-600 to-blue-600';
};

export const GenreCard: React.FC<GenreCardProps> = ({ genre, rank }) => {
  const gradient = getGenreGradient(genre.name);

  return (
    <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm overflow-hidden">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
            {rank}
          </div>
          <Badge
            variant="secondary"
            className="text-xs bg-purple-900/50 text-purple-200 border-purple-700/50"
          >
            {genre.count != null ? `${genre.count.toLocaleString()} movies` : 'Count N/A'}
          </Badge>
        </div>

        <div className={`bg-gradient-to-br ${gradient} rounded-lg p-3 mb-3 flex items-center justify-center text-white`}>
          {getGenreIcon(genre.name)}
        </div>

        <h3 className="text-white font-semibold text-center text-sm">
          {genre.name}
        </h3>
      </CardContent>
    </Card>
  );
};
