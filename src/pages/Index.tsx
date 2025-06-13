
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Film, Star, Users, Database, Code, Github } from "lucide-react";
import { MovieCard } from "@/components/MovieCard";
import { GenreCard } from "@/components/GenreCard";
import { DatasetSample } from "@/components/DatasetSample";
import { toast } from "@/hooks/use-toast";

const occupations = [
  "administrator", "artist", "doctor", "educator", "engineer", "entertainment",
  "executive", "healthcare", "homemaker", "lawyer", "librarian", "marketing",
  "none", "other", "programmer", "retired", "salesman", "scientist", "student",
  "technician", "writer"
];

const sampleMovies = [
  { title: "Toy Story", year: 1995, genres: ["Animation", "Children's", "Comedy"] },
  { title: "Jurassic Park", year: 1993, genres: ["Action", "Adventure", "Sci-Fi"] },
  { title: "Forrest Gump", year: 1994, genres: ["Comedy", "Drama", "Romance"] },
  { title: "The Lion King", year: 1994, genres: ["Animation", "Children's", "Musical"] },
  { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
  { title: "The Shawshank Redemption", year: 1994, genres: ["Drama"] },
  { title: "Speed", year: 1994, genres: ["Action", "Thriller"] },
  { title: "Star Wars", year: 1977, genres: ["Adventure", "Fantasy", "Sci-Fi"] },
  { title: "Terminator 2: Judgment Day", year: 1991, genres: ["Action", "Sci-Fi", "Thriller"] },
  { title: "Titanic", year: 1997, genres: ["Drama", "Romance"] }
];

const sampleGenres = [
  { name: "Action", count: 1545 }, { name: "Comedy", count: 1200 }, { name: "Drama", count: 1603 },
  { name: "Thriller", count: 492 }, { name: "Romance", count: 471 }, { name: "Sci-Fi", count: 276 },
  { name: "Adventure", count: 283 }, { name: "Crime", count: 211 }, { name: "Horror", count: 343 },
  { name: "Animation", count: 105 }
];

const Index = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    occupation: ''
  });
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.age || !formData.gender || !formData.occupation) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to get recommendations.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call - in real implementation, this would call your backend
    setTimeout(() => {
      setRecommendations({
        movies: sampleMovies,
        genres: sampleGenres
      });
      setIsLoading(false);
      toast({
        title: "Recommendations Ready!",
        description: "Found your personalized movie recommendations.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-800/20 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Film className="h-8 w-8 text-purple-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">MovieMatch</h1>
                <p className="text-purple-300 text-sm">Find your next favorite movie!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-purple-400 text-purple-300">
                <Database className="h-3 w-3 mr-1" />
                MovieLens 100K
              </Badge>
              <Button variant="ghost" size="sm" className="text-purple-300 hover:text-white">
                <Github className="h-4 w-4 mr-2" />
                Code
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover Movies Tailored to You
          </h2>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto mb-6">
            Our recommendation system uses the MovieLens 100K dataset to analyze user preferences 
            and suggest movies you'll love. By finding users with similar demographics and tastes, 
            we curate personalized recommendations just for you.
          </p>
          <div className="flex justify-center items-center space-x-6 text-purple-300">
            <div className="flex items-center">
              <Users className="h-5 w-5 mr-2" />
              <span>943 Users</span>
            </div>
            <div className="flex items-center">
              <Film className="h-5 w-5 mr-2" />
              <span>1,682 Movies</span>
            </div>
            <div className="flex items-center">
              <Star className="h-5 w-5 mr-2" />
              <span>100K Ratings</span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* User Input Form */}
          <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-400" />
                Tell Us About Yourself
              </CardTitle>
              <CardDescription className="text-purple-200">
                Enter your details to get personalized movie recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="age" className="text-white">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    min="1"
                    max="100"
                    value={formData.age}
                    onChange={(e) => setFormData({...formData, age: e.target.value})}
                    className="bg-slate-800/50 border-purple-700/50 text-white placeholder:text-slate-400"
                    placeholder="Enter your age"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-white">Gender</Label>
                  <Select onValueChange={(value) => setFormData({...formData, gender: value})}>
                    <SelectTrigger className="bg-slate-800/50 border-purple-700/50 text-white">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-purple-700/50">
                      <SelectItem value="M" className="text-white">Male</SelectItem>
                      <SelectItem value="F" className="text-white">Female</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="occupation" className="text-white">Occupation</Label>
                  <Select onValueChange={(value) => setFormData({...formData, occupation: value})}>
                    <SelectTrigger className="bg-slate-800/50 border-purple-700/50 text-white">
                      <SelectValue placeholder="Select your occupation" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-purple-700/50 max-h-60">
                      {occupations.map((occupation) => (
                        <SelectItem key={occupation} value={occupation} className="text-white capitalize">
                          {occupation}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={isLoading}
                >
                  {isLoading ? "Finding Movies..." : "Get Recommendations"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Sample Data Preview */}
          <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Database className="h-5 w-5 mr-2 text-purple-400" />
                Dataset & Code Integration
              </CardTitle>
              <CardDescription className="text-purple-200">
                Explore the data and technology behind the recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <DatasetSample />
            </CardContent>
          </Card>
        </div>

        {/* Recommendations Results */}
        {recommendations && (
          <section className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Your Personalized Recommendations
            </h3>
            
            <Tabs defaultValue="movies" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-black/40 border-purple-800/30">
                <TabsTrigger value="movies" className="data-[state=active]:bg-purple-600 text-white">
                  Top 10 Movies
                </TabsTrigger>
                <TabsTrigger value="genres" className="data-[state=active]:bg-purple-600 text-white">
                  Top 10 Genres
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="movies" className="mt-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {recommendations.movies.map((movie, index) => (
                    <MovieCard key={index} movie={movie} rank={index + 1} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="genres" className="mt-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                  {recommendations.genres.map((genre, index) => (
                    <GenreCard key={index} genre={genre} rank={index + 1} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </section>
        )}

        {/* Technical Details */}
        <section>
          <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Code className="h-5 w-5 mr-2 text-purple-400" />
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="algorithm" className="border-purple-800/30">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    Recommendation Algorithm
                  </AccordionTrigger>
                  <AccordionContent className="text-purple-200">
                    <p className="mb-4">
                      Our system uses collaborative filtering to find users with similar demographics 
                      (age, gender, occupation) and movie preferences. Here's how it works:
                    </p>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Find users with matching or similar demographic profiles</li>
                      <li>Analyze their movie ratings and preferences</li>
                      <li>Calculate similarity scores based on rating patterns</li>
                      <li>Recommend highly-rated movies from similar users</li>
                      <li>Fall back to popular movies if no similar users exist</li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="integration" className="border-purple-800/30">
                  <AccordionTrigger className="text-white hover:text-purple-300">
                    Backend Integration
                  </AccordionTrigger>
                  <AccordionContent className="text-purple-200">
                    <p className="mb-4">
                      The website integrates with a Python backend that processes the MovieLens dataset:
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Frontend sends user input (age, gender, occupation) via API</li>
                      <li>Backend runs recommendation algorithm on MovieLens data</li>
                      <li>Returns top 10 movies and genres as JSON response</li>
                      <li>Frontend displays results with rich visual components</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-800/20 bg-black/20 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-purple-200">
                Data source: <span className="text-white font-semibold">MovieLens 100K Dataset</span>
              </p>
              <p className="text-purple-300 text-sm">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-purple-300 hover:text-white">
                <Github className="h-4 w-4 mr-2" />
                View on GitHub
              </Button>
              <Button variant="ghost" size="sm" className="text-purple-300 hover:text-white">
                <Database className="h-4 w-4 mr-2" />
                Dataset Info
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
