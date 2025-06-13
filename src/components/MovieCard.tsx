
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Film, Star } from "lucide-react";

interface Movie {
  title: string;
  year: number;
  genres: string[];
}

interface MovieCardProps {
  movie: Movie;
  rank: number;
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie, rank }) => {
  return (
    <Card className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center">
            <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-2">
              {rank}
            </div>
            <Film className="h-4 w-4 text-purple-400" />
          </div>
          <Star className="h-4 w-4 text-yellow-400 fill-current" />
        </div>
        
        <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
          {movie.title}
        </h3>
        
        <p className="text-purple-300 text-xs mb-3">
          {movie.year}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {movie.genres.slice(0, 2).map((genre, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs bg-purple-900/50 text-purple-200 border-purple-700/50"
            >
              {genre}
            </Badge>
          ))}
          {movie.genres.length > 2 && (
            <Badge 
              variant="secondary" 
              className="text-xs bg-purple-900/50 text-purple-200 border-purple-700/50"
            >
              +{movie.genres.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
