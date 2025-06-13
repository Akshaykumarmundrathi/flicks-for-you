
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, BarChart3 } from "lucide-react";

export const DatasetSample: React.FC = () => {
  const sampleUsers = [
    { id: 1, age: 24, gender: 'M', occupation: 'technician', zipcode: '85711' },
    { id: 2, age: 53, gender: 'F', occupation: 'other', zipcode: '94043' },
    { id: 3, age: 23, gender: 'M', occupation: 'writer', zipcode: '32067' },
  ];

  const sampleMovies = [
    { id: 1, title: 'Toy Story (1995)', genres: 'Animation|Children\'s|Comedy' },
    { id: 2, title: 'Jumanji (1995)', genres: 'Adventure|Children\'s|Fantasy' },
    { id: 3, title: 'Grumpier Old Men (1995)', genres: 'Comedy|Romance' },
  ];

  const sampleRatings = [
    { userId: 196, movieId: 242, rating: 3, timestamp: 881250949 },
    { userId: 186, movieId: 302, rating: 3, timestamp: 891717742 },
    { userId: 22, movieId: 377, rating: 1, timestamp: 878887116 },
  ];

  return (
    <Tabs defaultValue="data" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-slate-800/50">
        <TabsTrigger value="data" className="data-[state=active]:bg-purple-600 text-white text-xs">
          <Database className="h-3 w-3 mr-1" />
          Data
        </TabsTrigger>
        <TabsTrigger value="code" className="data-[state=active]:bg-purple-600 text-white text-xs">
          <Code2 className="h-3 w-3 mr-1" />
          Code
        </TabsTrigger>
        <TabsTrigger value="stats" className="data-[state=active]:bg-purple-600 text-white text-xs">
          <BarChart3 className="h-3 w-3 mr-1" />
          Stats
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="data" className="mt-4 space-y-4">
        <div>
          <h4 className="text-white text-sm font-semibold mb-2">Sample Users</h4>
          <div className="bg-slate-900/50 rounded p-3 text-xs font-mono text-purple-200 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-purple-300">
                  <th className="text-left pr-2">ID</th>
                  <th className="text-left pr-2">Age</th>
                  <th className="text-left pr-2">Gender</th>
                  <th className="text-left pr-2">Occupation</th>
                </tr>
              </thead>
              <tbody>
                {sampleUsers.map(user => (
                  <tr key={user.id}>
                    <td className="pr-2">{user.id}</td>
                    <td className="pr-2">{user.age}</td>
                    <td className="pr-2">{user.gender}</td>
                    <td className="pr-2">{user.occupation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h4 className="text-white text-sm font-semibold mb-2">Sample Movies</h4>
          <div className="bg-slate-900/50 rounded p-3 text-xs font-mono text-purple-200 overflow-x-auto">
            {sampleMovies.map(movie => (
              <div key={movie.id} className="mb-1">
                <span className="text-purple-300">{movie.id}:</span> {movie.title}
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="code" className="mt-4">
        <div className="bg-slate-900/50 rounded p-3 text-xs font-mono text-purple-200 overflow-x-auto">
          <div className="text-green-400 mb-2"># Recommendation Algorithm Sample</div>
          <div className="text-purple-300">def</div> <div className="text-blue-400 inline">get_recommendations</div>(age, gender, occupation):
          <div className="ml-4">
            <div className="text-gray-400"># Find similar users</div>
            <div><span className="text-purple-300">similar_users</span> = find_similar_users(age, gender, occupation)</div>
            <div className="text-gray-400"># Get their top-rated movies</div>
            <div><span className="text-purple-300">top_movies</span> = get_top_movies(similar_users)</div>
            <div className="text-purple-300">return</div> top_movies[:10]
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="stats" className="mt-4 space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-900/50 rounded p-3 text-center">
            <div className="text-white font-bold text-lg">943</div>
            <div className="text-purple-300 text-xs">Users</div>
          </div>
          <div className="bg-slate-900/50 rounded p-3 text-center">
            <div className="text-white font-bold text-lg">1,682</div>
            <div className="text-purple-300 text-xs">Movies</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-1">
          <Badge className="bg-purple-900/50 text-purple-200 text-xs">19 Genres</Badge>
          <Badge className="bg-purple-900/50 text-purple-200 text-xs">100K Ratings</Badge>
          <Badge className="bg-purple-900/50 text-purple-200 text-xs">21 Occupations</Badge>
        </div>
      </TabsContent>
    </Tabs>
  );
};
