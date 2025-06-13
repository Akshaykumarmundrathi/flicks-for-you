
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Sword, Smile, Heart, Zap, Rocket, 
  Skull, Map, Shield, Ghost, Palette 
} from "lucide-react";

interface Genre {
  name: string;
  count: number;
}

interface GenreCardProps {
  genre: Genre;
  rank: number;
}

const getGenreIcon = (genreName: string) => {
  const icons = {
    'Action': Sword,
    'Comedy': Smile,
    'Drama': Heart,
    'Thriller': Zap,
    'Romance': Heart,
    'Sci-Fi': Rocket,
    'Adventure': Map,
    'Crime': Shield,
    'Horror': Ghost,
    'Animation': Palette,
  };
  
  const IconComponent = icons[genreName] || Palette;
  return <IconComponent className="h-6 w-6" />;
};

const getGenreGradient = (genreName: string) => {
  const gradients = {
    'Action': 'from-red-600 to-orange-600',
    'Comedy': 'from-yellow-500 to-orange-500',
    'Drama': 'from-blue-600 to-purple-600',
    'Thriller': 'from-gray-700 to-gray-900',
    'Romance': 'from-pink-500 to-rose-500',
    'Sci-Fi': 'from-cyan-500 to-blue-600',
    'Adventure': 'from-green-500 to-teal-600',
    'Crime': 'from-red-800 to-gray-800',
    'Horror': 'from-purple-900 to-gray-900',
    'Animation': 'from-purple-500 to-pink-500',
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
            {genre.count.toLocaleString()} movies
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
